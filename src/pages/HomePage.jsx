import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import './styles/HomePage.css';

import Fruit from '../components/FruitCard.jsx';
import FruitData from '../Data.jsx';

import Logo from "../assets/logo.png";



function HomePage() {

	const [fruits, setFruits] = useState(FruitData);
	const [pageNumber, setPageNumber] = useState(0);

	const fruitsPerPage = 4;
	const pagesVisited = pageNumber * fruitsPerPage;

	const displayFruits = fruits
		.slice(pagesVisited, pagesVisited + fruitsPerPage)
		.map((fruit) => {
		return <Fruit 
			key = {fruit.id}
			name = {fruit.name}
			price = {fruit.price}
			vitamins = {fruit.vitamins}
			image = {fruit.image}
		/>
  	})

	const changePage = ({selected}) => {
		setPageNumber(selected);
	}

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
				{displayFruits}
				
			</div>

			<div className = "pagination-container">
				<ReactPaginate
				 	previousLabel = {null}
					nextLabel = {null}
					pageCount = {Math.ceil(fruits.length / fruitsPerPage)}
					onPageChange = {changePage}
					containerClassName ={"paginationBttns"}
					previousLinkClassName = {"previousBttn"}
					nextLinkClassName = {"nextBttn"}
					disabledClassName = {"paginationDisabled"}
					activeClassName = {"paginationActive"}
					renderOnZeroPageCount={null}
				/>
			</div>

			<footer>
				<p>&copy;Lemi-org 2024</p>
			</footer>

    	</div>
  	)
}

export default HomePage;
