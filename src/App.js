import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  state ={
    wizards: [],
    selectedCategory: "Gryffindor"
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

  render() {

    return (
      <div className="App">
        <Header />
        <Hogwarts 
        wizards={this.state.wizards}
        selectedCategory={this.state.selectedCategory}
        changeCategory={this.changeCategory}
        createNewWizard={this.createNewWizard}
        graduateWizard={this.graduateWizard}
        />
      </div>
    );
  }
  
}

export default App;
