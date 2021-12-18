import { createDecipheriv } from 'crypto';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Profil from './components/Profil/Profil';
// import AddFood from './components/AddFood/AddFood';
import StartPage from './components/StartPage/StartPage';
import Home from './components/Home/Home';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <StartPage />
    </div>
  );
}

export default App;
