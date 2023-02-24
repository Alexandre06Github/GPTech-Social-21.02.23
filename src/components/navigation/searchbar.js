import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "../../Styles/index.css";

let connected = () => {
	if (localStorage.getItem("token") === true) {
		return <h5>Vous êtes connecté</h5>;
	} else {
		return <h5>Vous n'êtes pas connecté</h5>;
	}
};

function Searchbar() {
	return (
		<nav>
			<div className="navSearch">
				<img
					src={logo}
					alt="logo"
					className="logo"
				/>
				<div className="gptech">
					<h1 className="titre">GPTech-Social</h1>
					<h4 className="stitre">
						"Le réseau social pour les accros des robots"
					</h4>
				</div>

				<div>{connected()}</div>
			</div>
		</nav>
	);
}

export default Searchbar;
