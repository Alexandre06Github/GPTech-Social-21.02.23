
import { useState } from 'react';
import Navbar from '../navigation/navbar';
import Searchbar from '../navigation/searchbar';
import './register.css';

function Register() {
   
  const [Nom, setNom] =useState('');
  const [Prenom, setPrenom] =useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');







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
                <input type="text" className="form-control"/>
            </div>
            <div>
                <label htmlFor="">Telephone</label>
                <input type="text" className="form-control"/>
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
export default Register;

