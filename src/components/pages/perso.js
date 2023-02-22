import React from "react";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";


function Perso() {
  return (
    <div className="profil">
      <Searchbar />
      <Navbar />

      <div className="blocProfil">
        <h2 className="profilTitle">Profil</h2>
        <br></br>
        <h3 className="profilTitlePublic">Public</h3>
        <br></br>
        <h4 className="formId">Nom d'utilisateur :</h4>
        <input className="formInput"></input>
        <h4 className="formId">Age :</h4>
        <input className="formInput" type="number" min="15" max="99"></input>
        <h4 className="formId">Description :</h4>
        <textarea className="formInputDescrition"></textarea>

        <h3 className="profilTitlePrivate">Privé 🔒</h3>
        <br></br>
        <h4 className="formId">Email :</h4>
        <input className="formInput"></input>
        <h4 className="formId">Adresse :</h4>
        <input className="formInput"></input>
        <button className="buttonModifProfil">Modifier</button>
      </div>
    </div>
  );
}

export default Perso;
