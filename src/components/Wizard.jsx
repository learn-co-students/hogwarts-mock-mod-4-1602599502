import React, { Component } from "react";

class Wizard extends Component {
  state = {
    image_1: true,
  };

  handleClick = () => {
    this.setState((preState) => {
      return {
        image_1: !preState.image_1,
      };
    });
  };

  handleDelete = (e) =>{
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`,{method: "DELETE"})
        .then(r=>r.json())
        .then(()=>{
          this.props.graduateWizard(this.props.wizard.id)
        })
  }

  render() {
    const { name, wand, house, image1, image2 } = this.props.wizard;
    return (
      <li className={`card ${name}`}>
        <div className="decorative">
          <div className="top">
            <div className="name">
              <h3>{name}</h3>
            </div>
            <div className="border">
              <img
                src={!this.state.image_1 ? image2 : image1}
                alt={name}
                onClick={this.handleClick}
              />
            </div>
          </div>
          <div className="card_bottom">
            <p className="house_name">{house}</p>
            <p className="description">Wand: {wand}</p>
            <button onClick={this.handleDelete}>Graduate</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Wizard;
