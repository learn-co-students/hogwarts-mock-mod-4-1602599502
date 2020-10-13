import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    image1: true
  }

  toggleImageState = () => {
    this.setState({ image1: !this.state.image1 })
  }

  handleDelete = (event) => {
    console.log(event.target.value)
    // fetch(`http://localhost:4000/wizards/${wizardId}`, {
    //   method: 'DELETE'
    // })
    //   .then(response => response.json())
    //   .then((emptyObj) => {
    //     this.props.deleteWizard(wizardId)
    //   })
  }
  // wizardId isn't the wizard.id in this case. trying to figure out how to 

  grabId = (id) => {
    console.log(id)
  }
  
  render() {

    let { id, name, wand, house, image1, image2 } = this.props.wizard

    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                <img src={ this.state.image1 ? image1 : image2 } alt={name} onClick={this.toggleImageState} />
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={this.grabId(id)} >
              {/* out of time, will just wait for review. */}
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
