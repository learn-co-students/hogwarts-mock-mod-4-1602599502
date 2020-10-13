import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  render() {
    return (
      <main>
        <MaraudersMap/>
        <GreatHall 
        wizards={this.props.wizards} 
        graduateWizard={this.props.graduateWizard}
        />
        <SortingHat 
        selectedCategory={this.props.selectedCategory}
        changeCategory={this.props.changeCategory}
        createNewWizard={this.props.createNewWizard}
        />
      </main>
    )
  }

}

export default Hogwarts;
