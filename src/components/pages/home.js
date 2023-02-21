import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";
import "./navStyle.css";
import robots1 from "./robots1.png";
import Searchbar from "../navigation/searchbar";

function Home() {
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
	//event updating the value of the hook (recording and displaying text entered)
	const handleTextInputChange = (e) => {
		//prevents default refreshing of the page
		e.preventDefault();
		//we set the event to be the target value of the input
		setMyInput(e.target.value);
	};
	//we hold the message in a state variable, of which the initial value is message
	const [updated, setUpdated] = useState("");
	function handleClick() {}

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
					<button
						type="submit"
						onSubmit={handleTextInputChange}
					>
						Post
					</button>
					<div className="posts">
						<p>{myInput}</p>
					</div>
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
