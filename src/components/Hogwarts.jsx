import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

//cannot mutate state
  state = {
    wizards: [],
    selectedHouse: "All"
  }

  //do a componentDidMount

  componentDidMount() {
    fetch("http://localhost:4000/wizards")
      .then(res => res.json())
      .then(arrayOfWizards => {
        this.setState({
          wizards: arrayOfWizards
        })
      })
  }


  addWizardToState = (newWizard) => {
    //we create the below line because we do not want to mutate the original the original state

    let copyOfWizards = [...this.state.wizards, newWizard]
    this.setState({
      wizards: copyOfWizards
    })
    console.log("this is the new wizard:", newWizard)
  }


//grabs info from child and saves to state
  filterWizards = (optionWeGetBack) => {
    //we want to pass down the prop to Marauders
    console.log(optionWeGetBack)
  
    this.setState({
      selectedHouse: optionWeGetBack
    })

  }


  //take state and filters based on it

  helpFilterWizards = () => {
    if (this.state.selectedHouse === "All") {
      return this.state.wizards
    } else {
      return this.state.wizards.filter((wizard) => {
            return wizard.house.includes(this.state.selectedHouse)
      })
    }
  }
 

  getDeletedWizard = (id) => {
    let copyOfWizard = [...this.state.wizards]
    const filteredWizard = copyOfWizard.filter((wizard) => {
      return wizard.id !== id 
    })
    this.setState({
      wizards: filteredWizard
    })
  }

  render() {





    return (
      //for the sortingHat we are adding the wizard prop to sorting hat.

      <main>
        <MaraudersMap filterWizards={this.filterWizards} selectedHouse={this.state.selectedHouse}/>
        <GreatHall wizards={this.helpFilterWizards()} getDeletedWizard={this.getDeletedWizard}/>
        
        <SortingHat addWizard={this.addWizardToState}/>
      </main>
    )
  }

}

export default Hogwarts;
