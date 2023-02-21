import React from "react";

import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";

function Connection() {





return (

  <div className="connection">

    <Searchbar />
    <Navbar />

    <div className="blocIdentifiant">
        <h2>Connection</h2>
        <div className="espace"></div>
        <h3>Identifiant</h3>
        <input></input>
        <h3>Mot de passe</h3>
        <input></input>
        <div className="buttonValider">
        <button>Valider</button>
        </div>
    </div>




  </div>
)
}
export default Connection;
