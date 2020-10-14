import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    selectedHouse: "All"
  }

  componentDidMount(){

  fetch("http://localhost:4000/wizards")
      .then(res => res.json())
      .then((arrayOfWizards) => {
        this.setState({
          wizards: arrayOfWizards
        })
      })
  }

  addNewWizard = (newWizard) => {
    let newWizardArray = [...this.state.wizards, newWizard]
    this.setState({
      wizards: newWizardArray
    })
  }

  filterWizards = (slectedOptionRetuned) => {
    // console.log(slectedOptionRetuned)
    this.setState({
      selectedHouse: slectedOptionRetuned
    })
  }

  helperFilterWizards = () => {
    if (this.state.selectedHouse === "All") {
      return this.state.wizards
    } else {
      return this.state.wizards.filter((wizard) => {
        return wizard.house.includes(this.state.selectedHouse)
      })
    }
  }

  getDeletedWizard = (id) =>{
    const filteredWizard = this.state.wizards.filter((wizard) => {
      return wizard.id !== id
    })
    this.setState({
      wizards: filteredWizard
    })
  }


  render() {
    return (
      <main>
        <MaraudersMap filterWizards={this.filterWizards} selectedHouse={this.state.selectedHouse}/>
        <GreatHall wizards={this.helperFilterWizards()} getDeletedWizard={this.getDeletedWizard}/>
        <SortingHat addNewWizard={this.addNewWizard}/>
      </main>
    )
  }

}

export default Hogwarts;
