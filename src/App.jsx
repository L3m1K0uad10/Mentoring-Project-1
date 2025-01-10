import React from 'react';

import './App.css';

import Fruit from './components/FruitCard.jsx';
import FruitData from './Data.jsx';

import Logo from "./assets/logo.png";
import MangoImage from "./assets/Mango.png";
import StrawBerryImage from "./assets/strawberry.png";



function App() {

  return (
    <div className = "app-container">
      <img className = 'logo' src = {Logo} alt = "fruit app logo"/>
      <h3>DELICIOSO FRUITS</h3>

      <div className = "form-container">
        <form action = "">
          <input className = "search-input" type = "text" placeholder = "search a fruit"/>
          <input className = "form-action-btn" type = "submit" value = "search"/>
        </form>
        <button>add</button>
      </div>


      <div className="fruits-display-container">
        <Fruit name = "Mango" image = {MangoImage} price = "1.03"/>
        <Fruit name = "StrawBerry" image = {StrawBerryImage} price = "5.07"/>
        <Fruit name = "StrawBerry" image = {StrawBerryImage} price = "5.07"/>
        <Fruit name = "Mango" image = {MangoImage} price = "1.03"/>
      </div>

    </div>
  )
}

export default App
