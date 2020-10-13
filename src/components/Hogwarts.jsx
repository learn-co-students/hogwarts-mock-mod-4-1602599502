import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/wizards')
      .then(response => response.json())
      .then((arrayOfWizards) => {
        this.setState({ wizards: arrayOfWizards })
      })
  }

  addWizardToState = (newWizardObj) => {
    this.setState((prevState) => {
      let copyOfWizards = [...prevState.wizards, newWizardObj]
      return { wizards: copyOfWizards }
    })
  }

  render() {

    return (
      <main>
        <MaraudersMap/>
        <GreatHall wizards={this.state.wizards} />
        <SortingHat addWizard={this.addWizardToState} />
      </main>
    )
  }

}

export default Hogwarts;
