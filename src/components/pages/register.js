import React, { useState} from "react";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";
import "./register.css";

function Register() {
  const [ firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  //functions

  function handleSubmit() {


    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify ({
        email: email,
        password: password,
        firstname: firstName,
        lastname: lastName,
      }),
    };
    console.log("option", options);

    //Appel Api
     fetch(
      `https://social-network-api.osc-fr1.scalingo.io/GPTech-social/register`,
      options
    )
    .then(response => response.json()) // Récupère la réponse au format JSON
    .then(data => console.log(data)) // Utilise les données renvoyées par l'API
    .then (data => this.UseState({handleSubmit: data.id}));
     
      
  };


  return (
    <div>
      <Searchbar />
      <Navbar />
      <div>
        <div className="container">
          <h1>Création de Compte</h1>
          <form action="" className="mx-auto" method="post">
            <div>
              <label htmlFor="">Nom</label>
              <input
                type="text"
                className="form-control"
                id="Nom"
                value={firstName}
                onChange={(e) => setFistName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="">Prenom</label>
              <input
                type="text"
                className="form-control"
                id="Prenom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="">Mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="">Mot de Passe</label>
              <input
                type="password"
                className="form-control"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button onClick={handleSubmit} className="button">
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
