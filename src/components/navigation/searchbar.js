import React from "react";
import { Link } from "react-router-dom";
import logo from "../navigation/logo.png";

function Searchbar() {
	// <button>{<Link to="/">Maison</Link>}</button>

	return (
		<nav>
			<div className="navSearch">
				<img
					src={logo}
					alt="logo"
					height="50vh"
				/>
				<input
					className="inputSearch"
					placeholder="rechercher"
				></input>
				<br></br>
			</div>
		</nav>
	);
}

export default Searchbar;
