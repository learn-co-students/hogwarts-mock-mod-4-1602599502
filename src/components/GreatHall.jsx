import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  let arrayOfWizards = props.wizards.map(wizardObj => {
    return < Wizard 
            key={wizardObj.id} 
            wizard={wizardObj} 
            graduateWizardFun={props.graduateWizardFun}
            />
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        { arrayOfWizards }
      </ul>
    </section>
  )
}

export default GreatHall;
