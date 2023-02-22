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
          <p>je fais un</p>
        </div>
        <Footer/>
      </div>
    );
  }

export default ProfilCo;
