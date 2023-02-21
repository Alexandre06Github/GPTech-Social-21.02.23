import React from "react";
import { Link } from "react-router-dom";
import logo from "../navigation/logo.png";
import Home from "../pages/home";
import Register from "../pages/register";

function Navbar() {

  return (
	
    <nav className="navbar">
      <div>
        <div className="bloc1">
          <Link to="/register" className="bloc1">
            Inscription
          </Link>
        </div>
        <div>
          <div className="bloc1">
            <Link to="/connection" className="bloc1">
              Se connecter
            </Link>
          </div>
        </div>

        <div className="classDiv"></div>

        <div>
          <div className="bloc1">
            <Link to="/">Accueil</Link>
          </div>
        </div>
        <div>
          <div className="bloc1">
            <Link to="/home">Fil d'actualité</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
