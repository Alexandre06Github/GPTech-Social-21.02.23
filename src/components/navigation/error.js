import React from "react";
import Navbar from "../navigation/navbar";
import Searchbar from "../navigation/searchbar";
import Footer from "../navigation/footer";
import "../../Styles/navStyle.css";

function Error() {
	return (
		<div>
			<Searchbar />
			<Navbar />
			<div className="container">
				<h1>Game Over</h1>
			</div>
			<Footer />
		</div>
	);
}

export default Error;
