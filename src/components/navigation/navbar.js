import React from "react";
import logo from "../navigation/logo.png";
import { Link } from "react-router-dom";

import Home from "../pages/home"; // lien page d'accueil
import Register from "../pages/register"; // lien page d'inscription

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

        <div className="bloc1">
          <Link to="/">Accueil</Link>
        </div>

        <div className="bloc1">
          <Link to="/perso">Profil</Link>
        </div>

      </div>
      <button className="buttonDeco">Déconnection</button>
    </nav>
  );
}

export default Navbar;
