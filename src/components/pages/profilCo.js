import React, { useEffect, useState } from "react";
import Footer from "../navigation/footer";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";
import "../../Styles/index.css";

function ProfilCo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  async function getInfoProfil() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };

    // Envoie une requête fetch avec l'URL de l'API et les options définies
    const response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/gptech-social/user`,
      options
    );

    // Récupère la réponse au format JSON
    const data = await response.json();
    setFirstName(data.firstname);
    setLastName(data.lastname);
    setEmail(data.email);
    setAge(data.age);
    setOccupation(data.occupation);

    console.log(data); // Utilise les données renvoyées par l'API
  }

  useEffect(() => {
    getInfoProfil();
  }, []);


  
  return (
    <div>
      <Searchbar />
      <Navbar />
      <div className="container">
        <h1>Informations profil</h1>
        <div className="Profil">
          <div action="" className="mx-auto" method="get">
            <label htmlFor="">Nom :</label>
            <input
              type="text"
              id="Nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div action="" className="mx-auto" method="get">
            <div>
              <label htmlFor="">Prénom :</label>
              <input
                type="text"
                id="Prenom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div action="" className="mx-auto" method="get">
              <div>
                <label htmlFor="">Email :</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div action="" className="mx-auto" method="get">
                <div>
                  <label htmlFor="">Age :</label>
                  <input
                    type="text"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div action="" className="mx-auto" method="get">
                  <div>
                    <label htmlFor="">Occupation:</label>
                    <input
                      type="text"
                      id="age"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>
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
