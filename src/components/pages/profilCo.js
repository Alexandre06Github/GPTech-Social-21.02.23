import React, { useState } from "react";
import Footer from "../navigation/footer";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";
import colorful from "../../Images/colourful.jpg";
import "./profilCo.css";

function ProfilCo() {
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  async function InfoProfil() {
    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        age: age,
        occupation: occupation,
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
  }

  return (
    <div>
      <Searchbar />
      <Navbar />
      <div className="container">
        <div className="image">
          <img src={colorful} alt="colorful" />
        </div>
        <h1>Informations profil</h1>
        <div className="Profil">
          <div action="" className="mx-auto" method="get">
            <label htmlFor="">Nom:</label>
            <div
              type="text"
              id="Nom"
              value={firstName}
              onChange={(e) => setFistName(e.target.value)}
            />
          </div>
          <div action="" className="mx-auto" method="get">
            <div>
              <label htmlFor="">Prénom:</label>
              <div
                type="text"
                id="Prenom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div action="" className="mx-auto" method="get">
              <div>
                <label htmlFor="">email:</label>
                <div
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div action="" className="mx-auto" method="get">
                <div>
                  <label htmlFor="">age:</label>
                  <div
                    type="text"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div action="" className="mx-auto" method="get">
                  <div>
                    <label htmlFor="">occupation:</label>
                    <div
                      type="text"
                      id="age"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>
                  {InfoProfil}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilCo;
