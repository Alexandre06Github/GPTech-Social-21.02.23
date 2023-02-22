import React from "react";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";
import Footer from "../navigation/footer";
import "../../Styles/index.css";
import robots4 from "../../Images/robots4.jpg";
import robots3 from "../../Images/robots3.jpg";

function Perso() {
	return (
		<div>
			<Searchbar />
			<div className="profil">
				<Navbar />
				<div className="blocProfil">
					<h2 className="profilTitle">Profil</h2>
					<div className="empty"></div>
					<h3 className="profilTitlePublic">Public</h3>
					<div className="empty"></div>
					<h4 className="formId">Nom d'utilisateur :</h4>
					<input className="formInput"></input>
					<h4 className="formId">Age :</h4>
					<input
						className="formInput"
						type="number"
						min="15"
						max="99"
					></input>
					<h4 className="formId">Description :</h4>
					<textarea className="formInputDescription"></textarea>

					<h3 className="profilTitlePrivate">Privé 🔒</h3>
					<br></br>
					<h4 className="formId">Email :</h4>
					<input className="formInput"></input>
					<h4 className="formId">Adresse :</h4>
					<input className="formInput"></input>
					<button className="buttonModifProfil">Modifier</button>
				</div>
				<div className="advert">
					<img
						src={robots4}
						alt="advert"
						className="bot"
					></img>
					<img
						src={robots3}
						alt="advert"
						className="bot"
					></img>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Perso;
