import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

//cannot mutate state
  state = {
    wizards: []
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

  render() {





    return (
      <main>
        <MaraudersMap/>
        <GreatHall wizards={this.state.wizards}/>
        <SortingHat/>
      </main>
    )
  }

}

export default Hogwarts;
