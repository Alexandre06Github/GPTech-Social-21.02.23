import React from "react";
import logo from "../navigation/logo.png";
import { Link } from "react-router-dom";

import Home from "../pages/home"; // lien page d'accueil
import Register from "../pages/register"; // lien page d'inscription

function Navbar() {
	return (
		<nav className="navbar">
			<div>
				<button className="bloc1">
					<Link
						to="/register"
						className="bloc1"
					>
						Inscription
					</Link>
				</button>
				<div>
					<button className="bloc1">
						<Link
							to="/connection"
							className="bloc1"
						>
							Se connecter
						</Link>
					</button>
				</div>

				<div className="classDiv"></div>

				<button className="bloc1">
					<Link to="/">Accueil</Link>
				</button>

				<button className="bloc1">
					<Link to="/perso">Profil</Link>
				</button>

				{/* <button className="bloc1">
					<Link to="/profilCo">Profil</Link>
				</button> */}
			</div>
			<div className="classDiv"></div>
			<div>
				<button className="buttonDeco">Déconnection</button>
			</div>
		</nav>
	);
}

export default Navbar;
