import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    image1: true
  }

  toggleImageState = () => {
    this.setState({ image1: !this.state.image1 })
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
              <button>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
