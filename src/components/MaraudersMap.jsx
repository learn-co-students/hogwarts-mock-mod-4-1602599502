import React, { Component } from 'react';

class MaraudersMap extends Component {

  handleSelect = (event) => {
    let houseSelection = event.target.value
    this.props.filterWizards(houseSelection)
  }

  render() {
    return (
      <nav>
        <h2>Houses of Hogwarts</h2>
        <select id="map" onChange={this.handleSelect}>
          <option value="All">All</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </nav>
    );
  }

}

export default MaraudersMap;
