import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "../../Styles/index.css";

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
			</div>
		</nav>
	);
}

export default Searchbar;
