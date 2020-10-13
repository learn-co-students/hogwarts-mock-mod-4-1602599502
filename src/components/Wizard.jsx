import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    imgClick : false
  }

  handleImgClick=(evt)=>{
    this.setState({
      imgClick : !this.state.imgClick
    })
  }

  handleDelete=(evt)=>{
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`,{
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(graduated => {
      this.props.graduateWizardFun(this.props.wizard)
    })
  }

  render() {
    
    let {name, wand, house, image1, image2} = this.props.wizard

    return (
        <li className={`card ${house}`} >
          <div className="decorative" >

            <div className="top" onClick={this.handleImgClick}  style={{cursor:'pointer'}} >
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                <img src={this.state.imgClick ? image2 : image1} alt={name}/>
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
