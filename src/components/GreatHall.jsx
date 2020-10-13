import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  let arrayOfWizardComponents = props.wizards.map((wizard) => {
    return <Wizard key={wizard.id} wizard={wizard} />
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        { arrayOfWizardComponents }
      </ul>
    </section>
  )
}

export default GreatHall;
