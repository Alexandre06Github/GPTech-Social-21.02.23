import React, { useState } from "react";
import Footer from "../navigation/footer";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";

import "./profilCo.css";

function ProfilCo() {


    return (
      <div>
        <Searchbar />
        <Navbar />
        <div className="container">
          <h1>Informations profil</h1>
        <div className="Profil">
          <p>Prenom:</p>
          <p>Nom:</p>
          <p>email:</p>
          <p>Age:</p>
          <p>Occupation:</p>
          </div>
          </div>
</div>
       
    );
  }

export default ProfilCo;
