import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
  // access the props 
  // map over the array of wizards 
  // pull out the specific keys that I want to use in the render of the wizard -- passing down as props
  let wizards = props.wizards.map((wizard) => {
    // <Wizard key={wizard.id} {...wizard} />
    return <Wizard key={wizard.id} wizard={wizard} getDeletedWizard={props.getDeletedWizard}/>
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {wizards}
      </ul>
    </section>
  )
}

export default GreatHall;
