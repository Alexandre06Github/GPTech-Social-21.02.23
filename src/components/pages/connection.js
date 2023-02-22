import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";

function Connection() {

  // Déclare deux états pour stocker l'email et le mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Cette fonction sera appelée lorsque l'utilisateur cliquera sur le bouton "Valider"
  function handleSubmit() {

    // Déclare un objet options pour configurer la requête fetch
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    };

    // Envoie une requête fetch avec l'URL de l'API et les options définies
    fetch(`https://social-network-api.osc-fr1.scalingo.io/GPTech-social/login`, options)
      .then(response => response.json()) // Récupère la réponse au format JSON
      .then(data => console.log(data)) // Utilise les données renvoyées par l'API
      .catch(error => console.log(error)); // Gère les erreurs éventuelles
  }

  return (
    <div className="connection">
      <Searchbar />
      <Navbar />

      <div className="blocIdentifiant">
        <h2>Connection</h2>
        <div className="espace"></div>
        <h3>Identifiant</h3>

        {/* Crée un champ de saisie pour l'email et met à jour l'état de l'email à chaque changement */}
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <h3>Mot de passe</h3>

        {/* Crée un champ de saisie pour le mot de passe et met à jour l'état du mot de passe à chaque changement */}
        <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
        
        <div className="buttonValider">
          {/* Crée un bouton "Valider" qui déclenche la fonction handleSubmit lorsque l'utilisateur clique dessus */}
          <button onClick={handleSubmit}>Valider</button>
        </div>
      </div>
    </div>
  );
}

export default Connection;