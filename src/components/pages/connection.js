import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";

function Connection() {
  // Récupère les informations de connexion stockées dans le localstorage, ou une chaîne vide si elles n'existent pas
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Cette fonction sera appelée lorsque l'utilisateur cliquera sur le bouton "Valider"
  async function handleSubmit() {
    // Déclare un objet options pour configurer la requête fetch
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    
    setToken(localStorage.getItem("token"));   // récupérer la valeur du token stockée dans le localstorage et la mettre à jour dans l'état de la variable token.

    try {
      // Envoie une requête fetch avec l'URL de l'API et les options définies
      const response = await fetch(
        `https://social-network-api.osc-fr1.scalingo.io/GPTech-social/login`,
        options
      );

      // Récupère la réponse au format JSON
      const data = await response.json();

      // Utilise les données renvoyées par l'API
      console.log(data);

      // Stocke les informations de connexion dans le localstorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("token", data.token);
    } catch (error) {
      // Gère les erreurs éventuelles
      console.log(error);
    }
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
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <div className="buttonValider">
          {/* Crée un bouton "Valider" qui déclenche la fonction handleSubmit lorsque l'utilisateur clique dessus */}
          <button onClick={handleSubmit}>Valider</button>
        </div>
      </div>
    </div>
  );
}

export default Connection;
