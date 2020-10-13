import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    selectedHouse: "All"
  }

  componentDidMount() {
    fetch("http://localhost:4000/wizards")
    .then(resp => resp.json())
    .then(arrayOfWizards => {
      this.setState({
        wizards: arrayOfWizards
      })
    })
  }

  addWizardToState = (newWizard) => {
    let copyOfWizards = [...this.state.wizards, newWizard]
    this.setState({
      wizards: copyOfWizards
    })
  }

  // grabs info from child and saves to state
  filterWizards = (optionWeGetBack) => {
    this.setState({
      selectedHouse: optionWeGetBack
    })
  }

  // takes state and filters based on it
  helpFilterWizards = () => {
    if (this.state.selectedHouse === "All") {
      return this.state.wizards
    } else {
      return this.state.wizards.filter((wizard) => {
        return wizard.house.includes(this.state.selectedHouse)
      })
    } 
    // let {selectedHouse} = this.state
    // switch (selectedHouse) {
    //   case "All":
    //     return this.state.wizards
    //   case "Gryffindor":
    //     return this.state.wizards.filter((wizard) => {
    //           return wizard.house === "Gryffindor"
    //     })
    //     case "Gryffindor":
    //       return this.state.wizards.filter((wizard) => {
    //             return wizard.house === "Gryffindor"
    //       })
    // }
  }

  getDeletedWizard = (id) => {
    // const copyOfWizards = [...this.state.wizards]
    const filteredWizard = this.state.wizards.filter((wizard) => {
      return wizard.id !== id 
    })
    this.setState({
      wizards: filteredWizard
    })
  }

  render() {
    // let filteredArray = this.state.wizards.filter((wizard) => {
    //   if (this.state.selectedHouse === "All") {
    //     return this.state.wizards
    //   } else if (wizard.house === this.state.selectedHouse) {
    //     return wizard
    //   }
    // })
    return (
      <main>
        <MaraudersMap filterWizards={this.filterWizards} selectedHouse={this.state.selectedHouse}/>
        <GreatHall wizards={this.helpFilterWizards()} getDeletedWizard={this.getDeletedWizard}/>
        <SortingHat addWizard={this.addWizardToState}/>
      </main>
    )
  }

}

export default Hogwarts;
