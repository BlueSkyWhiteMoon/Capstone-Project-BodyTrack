import React from 'react';
import './StartPage.css';

const StartPage = () => {
  return (
    <div className="container">
      <nav className="navStart">Heute</nav>
      <main>
        <h1 className="h1Meal">Verbleibende Kalorien</h1>
        <ul className="rechnung">
          <li>1600</li>
          <li>-</li>
          <li>0</li>
          <li>+</li>
          <li>0</li>
          <li>=</li>
          <li>1600</li>
        </ul>
        <ul className="h2Main">
          <li>Ziel</li>
          <li></li>
          <li>Nahrung</li>
          <li></li>
          <li>Training</li>
          <li></li>
          <li>Verbleib</li>
        </ul>
      </main>

      <div id="frühstück">
        <h1 className="h1Meal">Frühstück Kalorien:</h1>
        <div className="addedFood">Paprika cal</div>
        <h2 className="nahrungsmittelHinzu">Nahrungsmittel hinzufügen</h2>
      </div>

      <div id="mittagessen">
        <h1 className="h1Meal">Mittagessen Kalorien:</h1>
        <div className="addedFood"></div>
        <h2 className="nahrungsmittelHinzu">Nahrungsmittel hinzufügen</h2>
      </div>
      <div id="abendessen">
        <h1 className="h1Meal">Abendessen Kalorien:</h1>
        <div className="addedFood"></div>
        <h2 className="nahrungsmittelHinzu">Nahrungsmittel hinzufügen</h2>
      </div>
      <div id="snacks">
        <h1 className="h1Meal">Snacks Kalorien:</h1>
        <div className="addedFood"></div>
        <h2 className="nahrungsmittelHinzu">Nahrungsmittel hinzufügen</h2>
      </div>
      <div id="training">
        <h1 className="h1Meal">Training Kalorien:</h1>
        <div className="addedFood"></div>
        <h2 className="nahrungsmittelHinzu">Nahrungsmittel hinzufügen</h2>
      </div>
    </div>
  );
};

export default StartPage;
