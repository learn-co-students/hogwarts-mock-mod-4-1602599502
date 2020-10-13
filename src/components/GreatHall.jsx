import React from "react";
import Wizard from "./Wizard";

const GreatHall = (props) => {
  const renderWizards = props.wizards.map((wizardObj) => {
    return <Wizard 
    key={wizardObj.id}
     wizard={wizardObj}
     graduateWizard={props.graduateWizard}
     />;
  });

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">{renderWizards}</ul>
    </section>
  );
};

export default GreatHall;
