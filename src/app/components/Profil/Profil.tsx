import React, { useState } from 'react';

const Profil = (): JSX.Element => {
  const [weight, setWeight] = useState(90);
  const [goalWeight, setGoalWeight] = useState(93);

  const handleClick = () => {
    setWeight(95);
    console.log(weight);
  };

  const handleClickZiele = () => {
    setGoalWeight(100);
  };

  return (
    <div className="personalData">
      <h2>Gewicht</h2>
      <p>Hier kommt ein Diagramm hin.</p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Gewicht aktualisieren
      </button>

      <h2>Ziele</h2>
      <button
        onClick={() => {
          handleClickZiele();
        }}
      >
        Ziele aktualisieren
      </button>
    </div>
  );
};

export default Profil;
