import React from "react";
import { Link } from "react-router-dom";
import logo from "../navigation/logo.png";
import Home from "../pages/home";
import Register from "../pages/register";

function Navbar() {
	return (
		<nav>
			<div className="navbar">
				<Link to="/register">Inscription</Link>
				<div>
					<Link to="/connection">Se connecter</Link>
				</div>
				<div>
					<Link to="/">Accueil</Link>
				</div>
				<div>
					<Link to="/home">Fil d'actualité</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
