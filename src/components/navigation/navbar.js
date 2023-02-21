import React from "react";
import { Link } from "react-router-dom";
import logo from "../navigation/logo.png";

function Navbar() {
	return (
		<nav>
			<div className="nav">
				<img
					src={logo}
					alt="logo"
				/>
				<button>{<Link to="/">Maison</Link>}</button>
			</div>
		</nav>
	);
}

export default Navbar;
