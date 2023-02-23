import React, { useEffect, useState } from "react";
import Footer from "../navigation/footer";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";
import colorful from "../../Images/colourful.jpg";
import "./profilCo.css";

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
        "Authorization": "bearer " + localStorage.getItem("token")
      }, 
    };
    console.log("option", options);
    

	// Envoie une requête fetch avec l'URL de l'API et les options définies
		const response = await fetch(
			`https://social-network-api.osc-fr1.scalingo.io/GPTech-social/profilCo`,
			options
		);
    


		// Récupère la réponse au format JSON
    const data = await response.json();
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setAge(data.age);
    setOccupation(data.occupation);

		console.log(data); // Utilise les données renvoyées par l'API
  }

useEffect(() => {
 

  getInfoProfil();
  
}, [])




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
              onChange={(e) => setFirstName(e.target.value)}
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
