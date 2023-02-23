import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/index.css";
import Home from "../pages/home"; // lien page d'accueil
import Register from "../pages/register"; // lien page d'inscription

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navButtons">
				<button className="bloc1">
					<Link
						to="/register"
						className="bloc1"
					>
						Inscription
					</Link>
				</button>
				<button className="bloc1">
					<Link
						to="/connection"
						className="bloc1"
					>
						Se connecter
					</Link>
				</button>
				<div>
					<p></p>
				</div>

				<button className="bloc1">
					<Link to="/">Accueil</Link>
				</button>

				<button className="bloc1">
					<Link to="/profil">Profil</Link>
				</button>

				<div>
					<p></p>
				</div>
				<button className="buttonDeco">Déconnexion</button>
			</div>
		</nav>
	);
}

export default Navbar;
