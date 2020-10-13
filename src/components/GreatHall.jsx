import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  // turn wizardsArray into wizard components
  let wizardComponents = props.wizards.map((wizardObj) => {
    return <Wizard 
    key={wizardObj.id}
    wizard={wizardObj}
    deleteWizard={props.deleteWizard}/>
    
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {/* Render Wizards Here*/}
        {wizardComponents}
      </ul>
    </section>
  )
}

export default GreatHall;
