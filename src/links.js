import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/navigation/error";
import Home from "./components/pages/home";
import Footer from "./components/navigation/footer";
import Navbar from "./components/navigation/navbar";
import Searchbar from "./components/navigation/searchbar";
import Connection from "./components/pages/connection";
import Perso from "./components/pages/perso";
import Register from "./components/pages/register";
import ProfilCo from "./components/pages/profilCo";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: "/connection",
		element: <Connection />,
		errorElement: <Error />,
	},
	{
		path: "/profilCo",
		element: <ProfilCo />,
		errorElement: <Error />,
	},

	{
		path: "/perso",
		element: <Perso />,
		errorElement: <Error />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
	},
	{
		path: "/navbar",
		element: <Navbar />,
		errorElement: <Error />,
	},
	{
		path: "/footer",
		element: <Footer />,
		errorElement: <Error />,
	},
	{
		path: "/searchbar",
		element: <Searchbar />,
		errorElement: <Error />,
	},
]);
