import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";
import "./navStyle.css";
import robots1 from "./robots1.png";
import Searchbar from "../navigation/searchbar";

async function Home() {
	//we create a constant to store the selected uploaded file, with a starting value of null
	const [selectedFile, setSelectedFile] = useState(null);
	//we create a const to handle the upload (input)
	const handleFileInputChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};
	//we create a const to handle the file input action
	const handleFileInputClick = () => {
		document.getElementById("fileInput").click();
	};
	//we create a new state variable to store the input text
	const [myInput, setMyInput] = useState([]);
	//pulling posts from the api
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: {
			title: String,
			content: String,
		},
	};

	const response = await fetch(
		"https://social-network-api.osc-fr1.scalingo.io/gptech-social/posts",
		options
	);
	const data = await response.json();

	//event updating the value of the hook (recording and displaying text entered)
	// function handleTextInputChange(e) {
	// 	//prevents default refreshing of the page
	// 	e.preventDefault();
	// 	//we set the event to be the target value of the input
	// 	setMyInput(e.target.value);
	// }

	return (
		<div className="App">
			{/* section on the top */}
			<Searchbar />
			<div className="homeBody">
				{/* section on the left */}
				<div>
					<Navbar />
				</div>
				{/* section in the middle, with posts */}
				<div className="centerBody">
					<form>
						{/* upload document/image */}
						<input
							type="file"
							id="fileInput"
							onChange={handleFileInputChange}
						/>
						<a
							href="#"
							onClick={handleFileInputClick}
						>
							&#x1F916;
						</a>
						{/* posting area */}
						<input
							type="textarea"
							placeholder="Chéri dis moi oui"
							className="input"
							value={myInput}
							onSubmit={handleTextInputChange}
						></input>
					</form>
					<button
						type="submit"
						onSubmit={handleTextInputChange}
						class="post"
					>
						Post
					</button>
				</div>
				<div className="posts">
					<p>{myInput}</p>
				</div>

				{/* advert on the right */}
				<div>
					<img
						src={robots1}
						alt="advert"
						className="bot"
					></img>
				</div>
			</div>
			{/* end of page */}
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
