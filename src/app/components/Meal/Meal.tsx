import React from 'react';
import Home from '../Home/Home';

const Meal = ({ meals, title, handleDelete }) => {
  // Destructuring the props directly into meals and title, the properties we need

  return (
    <div className="meal-list">
      <h2>{title}</h2>
      {meals.map((meal) => (
        <div className="meal-preview" key={meal.id}>
          <h2>{meal.title}</h2>
          <p>
            {meal.food}, {meal.amount}g, {meal.kcal}kcal
          </p>
          <button>{meal.action}</button>
          <button onClick={() => handleDelete(meal.id)}>Löschen</button>
        </div>
      ))}
    </div>
  );
};

export default Meal;
