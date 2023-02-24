import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";
import "../../Styles/navStyle.css";
import robots1 from "../../Images/robots1.png";
import robots5 from "../../Images/robots5.jpg";
import Searchbar from "../navigation/searchbar";

function HomeCo() {
	//we create a const to handle the file input action
	const [inputValue, setInputValue] = useState(""); //  ajout tache, we create a table to hold the input of the posts
	const [inputTitle, setInputTitle] = useState("");
	const [array, setArray] = useState([]); // tableau vide
	const [token, setToken] = useState(localStorage.getItem("token") || "");

	// Getting the token collected when connecting from the api
	async function handleSubmit() {
		// configures fetch
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		};

		// Envoie une requête fetch avec l'URL de l'API et les options définies
		const response = await fetch(
			`https://social-network-api.osc-fr1.scalingo.io/gptech-social/login`,
			options
		);

		// getting the data
		const data = await response.json();
		//little check
		console.log(data);

		// stores the collected info in the local storage
		localStorage.setItem("token", data.token);
	}

	//POSTING
	// Posting posts to the api
	async function postPosts() {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",

				// to validate token to allow editing
				Authorization: "bearer " + localStorage.getItem("token"),
			},
			//get the data in the right format
			body: JSON.stringify({
				title: inputTitle,
				content: inputValue,
			}),
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/gptech-social/post",
			options
		);
		const data = await response.json();
		console.log(data);
		// setArray([...array, data]);
	}

	// FETCHING
	//getting posts from the api
	async function listPosts() {
		const options = {
			method: "GET",
			headers: {
				//standard http header, tells the server that the request is in json format
				"Content-Type": "application/json",
			},
		};

		//using the api to fetch the data
		let response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/gptech-social/posts?page=0&limit=10",
			options
		);
		let data = await response.json();

		setArray(data.content);
	}

	function handleInputChange(event) {
		setInputValue(event.target.value);
	}
	function handleInputChange2(event) {
		setInputTitle(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		postPosts();
		setInputValue("");
		setInputTitle("");
	}

	useEffect(() => {
		listPosts();
	}, []);

	return (
		<div className="App">
			{/* section on the top */}
			<Searchbar />
			<div className="homeBody">
				{/* section on the left */}
				<Navbar />

				{/* MIDDLE POST  */}
				<div className="container">
					<h1 className="pageTitle">Fil d'actualités</h1>
					<h3>"Miroir, mon bot miroir..."</h3>
					<form onSubmit={handleSubmit}>
						<div className="field2">
							<div className="posts">
								<input
									type="text"
									value={inputTitle}
									onChange={handleInputChange2}
									placeholder="Titre"
									className="form-control"
								/>
								<textarea
									type="textarea"
									rows="5"
									value={inputValue}
									onChange={handleInputChange}
									placeholder="Raconter sa vie"
									className="form-control"
								/>
							</div>
						</div>
						<button type="submit">Poster</button>
					</form>
				</div>

				{/* displaying the posts */}
				{array &&
					array.map((post) => (
						<div
							className="display"
							key={post.id}
						>
							<h5>{post.title}</h5>
							<p>{post.content}</p>
						</div>
					))}

				{/* advert on the right */}
				<div className="advert">
					<img
						src={robots1}
						alt="advert"
						className="bot"
					/>
					<img
						src={robots5}
						alt="advert"
						className="bot"
					/>
				</div>
			</div>
			{/* end of the page */}
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default HomeCo;
