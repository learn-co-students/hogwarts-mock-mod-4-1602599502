import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  render() {
    return (
      <main>
        <MaraudersMap changeFilter={this.props.changeFilter}/>
        <GreatHall wizards={this.props.wizards} deleteWizard={this.props.deleteWizard}/>
        <SortingHat addWizard={this.props.addWizard}/>
      </main>
    )
  }

}

export default Hogwarts;