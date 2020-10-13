import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards : [],
    selectChoice : "All"
  }

  componentDidMount(){
    fetch('http://localhost:4000/wizards')
    .then(r => r.json())
    .then(res => {
      this.setState({
        wizards: res
      })
    })
  }

  addWizardFun = (addWizard) =>{
    let newArray = [...this.state.wizards, addWizard]
    this.setState({
      wizards : newArray
    })
  }

  graduateWizardFun = (graduatedWizard) => {
    let newArray = this.state.wizards.filter(wizard => {
      return wizard.id !== graduatedWizard.id
    })
    this.setState({
      wizards : newArray
    })
  }

  selectionFun = (selectedHouse) => {
    this.setState({
      selectChoice : selectedHouse
    })
  }

  filterWizardsArray = () => {
    let {selectChoice} = this.state

    switch(selectChoice){
      case "All" :
        return this.state.wizards

      case "Gryffindor" :
        return this.state.wizards.filter(wizard => (wizard.house === "Gryffindor") )

      case "Hufflepuff" :
        return this.state.wizards.filter(wizard => (wizard.house === "Hufflepuff") )

      case "Ravenclaw" :
        return this.state.wizards.filter(wizard => (wizard.house === "Ravenclaw") )

      case "Slytherin" :
        return this.state.wizards.filter(wizard => (wizard.house === "Slytherin") ) 

      default:  
    }
  }


  render() {
    return (
      <main>
        <MaraudersMap
           selectChoice={this.state.selectChoice}
           selectionFun={this.selectionFun}
        />

        <GreatHall
          wizards={this.filterWizardsArray()}
          graduateWizardFun={this.graduateWizardFun}
        />

        <SortingHat
          addWizardFun={this.addWizardFun}
        />
      </main>
    )
  }

}

export default Hogwarts;
