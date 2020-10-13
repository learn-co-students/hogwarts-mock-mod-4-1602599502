import React, { Component } from 'react';

class SortingHat extends Component {

  registerNewWizard = (event) => {
    event.preventDefault()
    let newWizardName = event.target.name.value
    let newWizardWand = event.target.wand.value 
    let newWizardHouse = event.target.house.value 
    let newWizardImg1 = event.target.image1.value 
    let newWizardImg2 = event.target.image2.value 

    fetch('http://localhost:4000/wizards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newWizardName,
        wand: newWizardWand,
        house: newWizardHouse,
        image1: newWizardImg1,
        image2: newWizardImg2
      })
    })
      .then(response => response.json())
      .then(this.props.addWizard)
      event.target.reset()
  }

  render() {

    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.registerNewWizard}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name"/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand"/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1"/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2"/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;
