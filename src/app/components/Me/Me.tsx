import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Me = () => {
  return (
    <div className="me">
      <h2>Personal Data</h2>
      <form>
        <label> Age:</label>
        <input type="number" required />
        <label> Weight:</label>
        <input type="number"></input>
        <label> Height:</label>
        <input type="number"></input>
        <label> Gender:</label>
        <select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button>Update</button>
      </form>
    </div>
  );
};

export default Me;
