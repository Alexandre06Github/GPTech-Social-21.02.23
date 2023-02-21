import { useState, useEffect } from "react";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";
import "./register.css";

function Register() {
  const [ firstName, setFistName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

 
  
  //functions

  const handleClick = (e) => {
    setFistName(e.target.value);
  };

  function value(e) {
    // test pour recup input.value console.log(e.target.value);
    setFistName(e.target.value);
  }

  const postNewUsers = async () => {


    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: "test3@gmail.com",
        password: "test",
        firstname: "test",
        lastname: "test",
      },
    };
    console.log("option", options);

    //Appel Api
    await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/GPTech-social/register`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("data", response);
      });
  };
  // useEffect




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
                value={lastname}
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
              <button onClick={postNewUsers} className="button">
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
