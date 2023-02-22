import React, { useState } from "react";
import Footer from "../navigation/footer";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";

import "./profilCo.css";

function ProfilCo() {
  const [firstName, setFistName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [age, setAge] = useState([]);
  const [occupation, setOccupation] = useState([]);

  async function handleSubmit() {
    const options = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
        Authorization: "bearer token",
      },
      body: JSON.stringify({
        firstname: "test",
        lastname: "test",
        email: "test",
        age: "test",
        occupation: "test",
      }),
    };
    console.log("option", options);

    //Appel Api
    await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/GPTech-social/user`,
      options
    )
      .then((response) => response.json()) // Récupère la réponse au format JSON
      .then((data) => console.log(data)); // Utilise les données renvoyées par l'API

    return (
      <div>
        <Searchbar />
        <Navbar />
        <div className="container">
          <h1>Informations profil</h1>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default ProfilCo;
