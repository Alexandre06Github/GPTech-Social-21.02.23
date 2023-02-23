import React, { useState } from "react";
import Footer from "../navigation/footer";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";
import "../../Styles/register.css";
import robots6 from "../../Images/robots6.jpg";
import robots7 from "../../Images/robots7.jpg";

function Register() {
	const [firstName, setFistName] = useState([]);
	const [lastName, setLastName] = useState([]);
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [newUser, setNewUser] = useState ({});

	//functions

	async function handleInput() {
		const options = {
			method: "POST",
			Headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
				firstname: firstName,
				lastname: lastName,
			}),
		};
		console.log("option", options);

		//Appel Api
		await fetch(
			`https://social-network-api.osc-fr1.scalingo.io/gptech-social/register`,
			options
		)
			.then((response) => response.json()) // Récupère la réponse au format JSON
			.then((data) => console.log(data)); // Utilise les données renvoyées par l'API
	}

	return (
		<div>
			<Searchbar />
			<div className="bodyReg">
				<Navbar />
				<div className="container">
					<h1 className="pageTitle">Création de Compte</h1>
					<form
						action=""
						className="mx-auto"
						method="post"
					>
						<div className="field">
							<label htmlFor="">Nom</label>
							<input
								type="text"
								className="form-control"
								id="Nom"
								value={firstName}
								onChange={(e) => setFistName(e.target.value)}
							/>
						</div>
						<div className="field">
							<label htmlFor="">Prénom</label>
							<input
								type="text"
								className="form-control"
								id="Prenom"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
						<div className="field">
							<label htmlFor="">Email</label>
							<input
								type="email"
								className="form-control"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="field">
							<label htmlFor="">Mot de Passe</label>
							<input
								type="password"
								className="form-control"
								id="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button
							onClick={handleInput}
							className="button"
						>
							S'inscrire
						</button>
					</form>
				</div>
				<div className="advert">
					<img
						src={robots6}
						alt="advert"
						className="bot"
					></img>
					<img
						src={robots7}
						alt="advert"
						className="bot"
					></img>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Register;
