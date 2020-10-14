import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: []
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


  render() {
    return (
      <main>
        <MaraudersMap/>
        <GreatHall wizards={this.state.wizards}/>
        <SortingHat addNewWizard={this.addNewWizard}/>
      </main>
    )
  }

}

export default Hogwarts;
