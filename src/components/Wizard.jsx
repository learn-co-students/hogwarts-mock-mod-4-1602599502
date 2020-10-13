import React, { Component } from 'react';

class Wizard extends Component {

  // defaults the display to true 
    // true = image1 false = image2
  state = {
    display: true
  }

  handleImgClick = (evt) => {
    this.setState({
      display: !this.state.display
    })
  }

  handleGraduate = (evt) => {
    // debugger
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then((nothing) => {
      this.props.deleteWizard(this.props.wizard.id)
    })
  }

  render() {
    let {name, wand, house, image1, image2} = this.props.wizard
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                {
                  this.state.display
                  ?
                  <img src={image1} alt={name} onClick={this.handleImgClick}/>
                  :
                  <img src={image2} alt={name} onClick={this.handleImgClick}/>
                }
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={this.handleGraduate}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
