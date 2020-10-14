import React from 'react';
import Wizard from './Wizard'


function GreatHall(props){
  let arrayOfComponents = props.wizards.map((wizardObj) => {
    return <Wizard
      key={wizardObj.id}
      wizard={wizardObj}
      getDeletedWizard={props.getDeletedWizard}
      />
  })

  

  
      
  
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        { arrayOfComponents }
      </ul>
    </section>
  )
  }


export default GreatHall;
