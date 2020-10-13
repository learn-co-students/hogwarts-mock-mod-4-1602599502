import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    allWizards: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/wizards')
      .then(response => response.json())
      .then((arrayOfWizards) => {
        this.setState({ 
          wizards: arrayOfWizards,
          allWizards: arrayOfWizards
        })
      })
  }

  addWizardToState = (newWizardObj) => {
    this.setState((prevState) => {
      let copyOfWizards = [...prevState.wizards, newWizardObj]
      return {  
        wizards: copyOfWizards,
        allWizards: copyOfWizards
      }
    })
  }

  deleteWizardFromState = (wizardId) => {
    let filteredWizards = this.state.wizards.filter((wizard) => wizard.id !== wizardId)
    this.setState({
      wizards: filteredWizards,
      allWizards: filteredWizards
    })
  }

  filterWizards = (houseSelection) => {
    if(houseSelection !== "All" ){
      let filteredWizards = this.state.wizards.filter((wizard) => wizard.house === houseSelection)
      this.setState({ wizards: filteredWizards})
    } else {
      this.setState({ wizards: this.state.allWizards })
    }
  }

  render() {

    return (
      <main>
        <MaraudersMap filterWizards={this.filterWizards} />
        <GreatHall wizards={this.state.wizards} deleteWizard={this.deleteWizardFromState}/>
        <SortingHat addWizard={this.addWizardToState} />
      </main>
    )
  }

}

export default Hogwarts;
