import React, { useState, useEffect } from 'react';
import Meal from '../Meal/Meal';

const Home = (): JSX.Element => {
  //let name = 'mario';
  const [food, setFood] = useState('Paprika');
  const [amount, setAmount] = useState(500);
  const [kcal, setKcal] = useState(100);
  const [meals, setMeals] = useState([
    {
      title: 'Frühstück',
      food: food,
      amount: amount,
      kcal: kcal,
      action: 'Nahrungsmittel hinzufügen',
      id: 1,
    },
    {
      title: 'Mittagessen',
      food: food,
      amount: amount,
      kcal: kcal,
      action: 'Nahrungsmittel hinzufügen',
      id: 2,
    },
    {
      title: 'Abendessen',
      food: food,
      amount: amount,
      kcal: kcal,
      action: 'Nahrungsmittel hinzufügen',
      id: 3,
    },
    {
      title: 'Snacks',
      food: food,
      amount: amount,
      kcal: kcal,
      action: 'Nahrungsmittel hinzufügen',
      id: 4,
    },
    {
      title: 'Training',
      food: food,
      amount: amount,
      kcal: kcal,
      action: 'Training hinzufügen',
      id: 5,
    },
  ]);

  const handleDelete = (id) => {
    const newMeals = meals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
  };

  const [name, setName] = useState('luigi');

  useEffect(() => {
    console.log('it was rerendered');
  }, [name]);

  return (
    <div className="home">
      <Meal
        meals={meals}
        title="Kalorienberechnung"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName('mario')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
