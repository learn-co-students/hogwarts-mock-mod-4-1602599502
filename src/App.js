import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  state ={
    wizards: [],
    selectedCategory: "Gryffindor",
    selectedmap: "All"
  }
  componentDidMount(){
    fetch("http://localhost:4000/wizards")
    .then(r => r.json())
    .then(fetchedWizards=>{
      this.setState({
        wizards: fetchedWizards
      })
    })
  }

  changeCategory =(chosenCat) =>{
    this.setState({
      selectedCategory: chosenCat
    })
  }

  createNewWizard =(newWizard) =>{
    const copyOfWizards = [...this.state.wizards, newWizard]
    this.setState({
      wizards: copyOfWizards
    })
  }

  graduateWizard = (graduateID)=>{
    const copyOfWizards =this.state.wizards.filter(wizardObj =>
      wizardObj.id !== graduateID
      )
      this.setState({
        wizards: copyOfWizards
      })
  }

  changeSelectedMap =(chosenmap) =>{
    this.setState({
      selectedmap: chosenmap
    })
  }

  HelpfilterHouse =() =>{
    const {wizards, selectedmap} = this.state
    const filterHouse = wizards.filter((wizard) =>
    selectedmap === "All" ? 
    wizard
    :
    wizard.house === selectedmap
  );
  return filterHouse
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Hogwarts 
        wizards={this.HelpfilterHouse()}
        selectedCategory={this.state.selectedCategory}
        changeCategory={this.changeCategory}
        createNewWizard={this.createNewWizard}
        graduateWizard={this.graduateWizard}
        changeSelectedMap={this.changeSelectedMap}
        />
      </div>
    );
  }
  
}

export default App;
