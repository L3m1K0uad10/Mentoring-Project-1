import React from 'react';
import { Link } from 'react-router-dom';

import './styles/HomePage.css';

import Fruit from '../components/FruitCard.jsx';
import FruitData from '../Data.jsx';

import Logo from "../assets/logo.png";



function HomePage() {

	const FruitItem = FruitData.map((item) => {
    	return <Fruit 
			key = {item.id}
			name = {item.name}
			price = {item.price}
			vitamins = {item.vitamins}
			image = {item.image}
		/>
  	})

  	return (
    	<div className = "homepage-container">
      		<img className = 'logo' src = {Logo} alt = "fruit app logo"/>
      		<h3>DELICIOSO FRUITS</h3>

			<div className = "form-container">
				<form action = "">
					<input className = "search-input" type = "text" placeholder = "search a fruit"/>
					<input className = "form-action-btn" type = "submit" value = "search"/>
				</form>
				<Link className = 'button' to = "/sign-in">add</Link>
			</div>

			<div className = "fruits-display-container">
				{FruitItem}
			</div>

			<div className = "pagination-container">
				{/* pagination container */}
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
				<p>5</p>
			</div>

			<footer>
				<p>&copy;Lemi-org 2024</p>
			</footer>

    	</div>
  	)
}

export default HomePage;
