
import { useState, useEffect } from 'react';
import Navbar from '../navigation/navbar';
import Searchbar from '../navigation/searchbar';
import './register.css';

function Register() {
   
  const [Nom, setNom] =useState([]);
  const [Prenom, setPrenom] =useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Birthday, setBirthday] = useState ("");
  const [Tel, setTel] = useState ("")

  //functions 

  const handleShearch = (e) => {
    setPrenom(e.target.value);
  };

  function value(e) {
    // test pour recup input.value console.log(e.target.value);
    setPrenom(e.target.value);
  

  const getNewUsers = async () => {
    const options = {
      method: "POST",
    };
    
    //Appel Api
    let response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/GPTech-Social-21.02.2023`,
      options
    );

     //Transformation fichier .json
     let data = await response.json();

     console.log("data", data);
 

  }
 // useEffect
 useEffect(() => {
  getNewUser("");
},[] );


const renderUser = () => {
  console.log("cocktail", cocktails);
  return Nom?.map((item, index) => 
  



  return (
    <div>
        <Searchbar/>
    <Navbar/>
    <div>
         
      <div className="container">
        
      <h1>Création de Compte</h1>
        <form action="" className="mx-auto" method="post">
            <div>
                <label htmlFor="">Nom</label>
                <input type="text" className="form-control"
                id= "Nom" value={Nom}
                onChange= {(e) => setNom (e.target.value)}
                required />
                
            </div>
            <div>
                <label htmlFor="">Prenom</label>
                <input type="text" className="form-control"
                id= "Prenom" value={Prenom}
                onChange= {(e) => setPrenom (e.target.value)}
                required />
            </div>
            <div>
                <label htmlFor="">Mail</label>
                <input type="email" className="form-control"
                 id= "Email" value={Email}
                 onChange= {(e) => setEmail (e.target.value)}
                 required />
            </div>
            <div>
                <label htmlFor="">Mot de Passe</label>
                <input type="password" className="form-control"
                 id= "Password" value={Password}
                 onChange= {(e) => setPassword (e.target.value)}
                 required />
            </div>
            <div>
                <label htmlFor="">Date de naissance</label>
                <input type="text" className="form-control"
                 id= "Birthday" value={Birthday}
                 onChange= {(e) => setBirthday (e.target.value)}
                 required />
            </div>
            <div>
                <label htmlFor="">Telephone</label>
                <input type="text" className="form-control"
                id= "Telephone" value={Tel}
                onChange= {(e) => setTel (e.target.value)}
                required 
                />
            </div>
            <div>
              <button className="button">
                S'inscrire
              </button>
             
            </div>
        </form>
      </div>
    </div>
    </div>
  );
}
}

export default Register;

