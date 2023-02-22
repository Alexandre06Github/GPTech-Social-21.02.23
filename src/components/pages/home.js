import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";
import "../pages/navStyle.css";
import robots1 from "../../Images/robots1.png";
import Searchbar from "../navigation/searchbar";

function Home() {
	//FILE UPLOAD
	//we create a constant to store the selected uploaded file, with a starting value of null (no file)
	const [selectedFile, setSelectedFile] = useState(null);
	//we create a const to handle the upload (input)
	const handleFileInputChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};
	//we create a const to handle the file input action
	const handleFileInputClick = () => {
		document.getElementById("fileInput").click();
	};

	//HANDLING POSTS
	//we create a table to hold the input of the posts
	const [myInput, setMyInput] = useState([]);

	// GETTING POSTS
	//pulling posts from the api
	const listPosts = async () => {
		const options = {
			method: "GET",
			headers: {
				//standard http header, tells the server that that the request is in json format
				"Content-Type": "application/json",
				Authorization: "bearer {token}",
			},
			//we're sending the content with json
			body: JSON.stringify({}),
		};
		//using the api to fetch the data
		let response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/gptech-social/posts/posts?page=0&limit=10",
			options
		);
		let data = await response.json();
		//We're collecting the content of the posts from the response data. The setMyInput updates the value of 'myInput' with the content retrieved from the api
		setMyInput(data.content);
	};

	// event updating the value of the hook (recording and displaying text entered)
	function handleTextInputChange(e) {
		//we set the event to be the target value of the input
		setMyInput(e.target.value);
	}
	//submitting data from the input
	function handleSubmit(e) {
		//prevents default refreshing of the page
		e.preventDefault();
		//updates the input to a new array, adding it to previous posts
		setMyInput([...myInput, e.target.elements.postInput.value]);
		//clears the input field after the input is recorded
		e.target.elements.postInput.value = "";
	}
	const renderPost = () => {
		return myInput.map((item, index) => {
			// where the posts are displayed, from the input
			return (
				<div
					key={index}
					className="posts"
				>
					<p>{item}</p>
				</div>
			);
		});
	};

	return (
		<div className="App">
			{/* section on the top */}
			<Searchbar />
			<div className="homeBody">
				{/* section on the left */}
				<Navbar />

				{/* section in the middle, with posts */}
				<div className="centerBody">
					{/* triggering the function to be called when the form is submitted */}
					<form onSubmit={handleSubmit}>
						{/* upload document/image */}
						<input
							type="file"
							id="fileInput"
							onChange={handleFileInputChange}
						/>
						{/* image holding the upload function */}
						<a
							href="#"
							onClick={handleFileInputClick}
						>
							&#x1F916;
						</a>
						{/* POSTING */}
						<input
							type="text"
							placeholder="Chéri dis moi oui"
							className="input"
							value={myInput}
							onChange={handleTextInputChange}
						></input>
						<button
							type="submit"
							className="post"
						>
							Post
						</button>
					</form>
					<div className="postText">{renderPost()}</div>
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
