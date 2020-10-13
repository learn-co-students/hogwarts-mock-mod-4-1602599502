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
    //   return {
    //     imageToggle: !prevState.imageToggle
    //   }
    // })
  }

  handleDelete = () => {
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      this.props.getDeletedWizard(this.props.wizard.id)
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
                {/* {this.state.imageToggle ? <img onClick={this.handleClick} src={image1} alt={name}/> : <img onClick={this.handleClick} src={image2} alt={name}/>} */}
                <img onClick={this.handleClick} src={this.state.imageToggle? image2:image1} alt={name}/>
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
