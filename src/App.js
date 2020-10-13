import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  state = {
    wizards: [],
    filter: "All"
  }

  componentDidMount(){
    fetch("http://localhost:4000/wizards")
    .then(response => response.json())
    .then(wizardsArray => {
      this.setState({
        wizards: wizardsArray
      })
    })
  }

  addWizard = (newWizard) => {
    let copyOfWizards = [...this.state.wizards, newWizard]
    this.setState({
      wizards: copyOfWizards
    })
  }

  changeFilter = (userChoice) => {
    this.setState({
      filter: userChoice
    })
  }

  deleteWizard = (deletedID) => {
    let copyOfWizards = [...this.state.wizards]
    let savedWizards = copyOfWizards.filter(wizard => {
      if (wizard.id !== deletedID) {
        // debugger
        return wizard
      }
    })
    // debugger
    this.setState({
      wizards: savedWizards
    })
  }

  render() {

    let filteredArray = this.state.wizards.filter((wizard) => {
      if (this.state.filter === "All") {
        return this.state.wizards
      } else if (wizard.house === this.state.filter) {
        return wizard
      }
    })

    return (
      <div className="App">
        <Header />
        <Hogwarts 
          wizards={filteredArray} 
          addWizard={this.addWizard} 
          filter={this.state.filter} 
          changeFilter={this.changeFilter}
          deleteWizard={this.deleteWizard}
        />
      </div>
    );
  }
  
}

export default App;
