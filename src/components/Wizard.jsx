import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    imageToggle: false
  }

  handleClick = (evt) => {
    this.setState({
      imageToggle: !this.state.imageToggle
    })
    // this.state((prevState) => {
    //   return {imageToggle: !prevState.imageToggle}
    // })
  }

  handleDelete = () => {
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(arrayOfWizards => {
      this.props.getDeletedWizard(this.props.wizard.id)
    })
  }





  render() {
    console.log("is the props here", this.props)
    let {name, wand, house, image1, image2} = this.props.wizard
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">

                <img onClick={this.handleClick} src={this.state.imageToggle ? image2:image1} alt={name} />


                
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={this.handleDelete}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
