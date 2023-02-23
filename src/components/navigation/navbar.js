import { cleanup } from "@testing-library/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/index.css";



function Navbar() {
	const navigate=useNavigate();

	const handleSubmit = async (e) => {
		localStorage.removeItem("token")
		localStorage.removeItem("email")
		localStorage.removeItem("password")
		navigate("/")
	}



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
				<button onClick={handleSubmit}className="buttonDeco">Déconnexion</button>
			</div>
		</nav>
	);
}


export default Navbar;
