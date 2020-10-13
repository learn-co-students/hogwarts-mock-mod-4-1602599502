import React, { Component } from 'react';

class SortingHat extends Component {

  state = {
    name: "", 
    wand: "", 
    house: "Gryffindor",
    image1: "",
    image2: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let {name, wand, house, image1, image2} = this.state
    fetch("http://localhost:4000/wizards", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        wand, 
        house, 
        image1,
        image2
      })
    })
    .then(resp => resp.json())
    .then(newWizard => {
      this.props.addWizard(newWizard)
    })
  }

  render() {
    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand" value={this.state.wand} onChange={this.handleChange}/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house" value={this.state.house} onChange={this.handleChange}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1" value={this.state.image1} onChange={this.handleChange}/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2" value={this.state.image2} onChange={this.handleChange}/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;
