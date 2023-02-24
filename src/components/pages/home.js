import React, { useState, useEffect } from "react";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";
import "../../Styles/navStyle.css";
import robots1 from "../../Images/robots1.png";
import robots5 from "../../Images/robots5.jpg";
import Searchbar from "../navigation/searchbar";

import { useReducer } from "react";

function Home() {
  const [allPosts, setAllPosts] = useState([]);
  const [count, updateCount] = useReducer(countReducer, 0);


  function countReducer(state, action) {
    if (action === "incrementation") {
      return state + 1;
    } else {
      throw new Error();
    }
  }








  const renderMyPosts = () => {
    if (allPosts.length >= 0) {
      return allPosts.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <button>like</button>
          </div>
        );
      });
    }
  };
  // permet de changer ma variable d'état grace à mon input

  async function getAllPost() {
    // Fonction pour récupérer les informations de l'utilisateur
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      // Envoie une requête fetch avec l'URL de l'API et les options définies
      `https://social-network-api.osc-fr1.scalingo.io/gptech-social/posts?page=0&limit=10`,
      options
    );
    const data = await response.json(); // Récupère la réponse au format JSON
    setAllPosts(data.posts);

    console.log(data.posts); // Utilise les données renvoyées par l'API
  }

  useEffect(() => {
    getAllPost();
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
          <div>
            <div className="form-control2">
              <div action="" method="get" className="field">
                {renderMyPosts()}
              </div>
            </div>
          </div>
        </div>

        {/* advert on the right */}
        <div className="advert">
          <img src={robots1} alt="advert" className="bot"></img>
          <img src={robots5} alt="advert" className="bot"></img>
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
