import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";
import "../pages/navStyle.css";
import robots1 from "../../Images/robots1.png";
import Searchbar from "../navigation/searchbar";

function Home() {
  //FILE UPLOAD

  const [selectedFile, setSelectedFile] = useState([]);    //we create a constant to store the selected uploaded file, with a starting value of null (no file)
  const handleFileInputClick = () => {document.getElementById("fileInput").click();};    //we create a const to handle the file input action
  const [inputValue, setInputValue] = useState("");      //  ajout tache       we create a table to hold the input of the posts
  const [array, setArray] = useState([]);   // tableau vide


  //HANDLING POSTS

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

const addTask = () => {
array.push(inputValue);
setArray([...array]);
}


  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputValue);
    setInputValue("");
	return array.map((inputValue) => {
		return <p>{inputValue}</p>
	})
  }





  // GETTING POSTS - NO TOUCHING
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
    //We're collecting the content of the posts from the response data. The setMyInput updates the value of 'inputValue' with the content retrieved from the api
    inputValue(data.content);
  };


  return (
    <div className="App">
      {/* section on the top */}
      <Searchbar />
      <div className="homeBody">
        {/* section on the left */}
        <Navbar />

        {/* MIDDLE POST  */}
        <div className="centerBody">
          <form onSubmit={handleSubmit}>
            <a href="#" onClick={handleFileInputClick}>
              &#x1F916;
            </a>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Chéri dis moi oui"
              className="input"
            />

{array.map((inputValue) => (
	<div className="display" key={inputValue.id}>
<p>{inputValue}</p>
	</div>
))}
			
            <button onClick={addTask} type="submit">Go</button>
          </form>
        </div>

        {/* advert on the right */}
        <div>
          <img src={robots1} alt="advert" className="bot"></img>
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
