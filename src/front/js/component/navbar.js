import React, {useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)

	const navigate = useNavigate()

	function logout() {
		localStorage.clear()
		actions.logout()
		navigate("/login")
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="d-flex gap-3">
					<Link to="/register" className="btn btn-primary">Register</Link>
					{
					store.token &&
					<button className="btn btn-primary" onClick={logout}>Log out</button>
					}	
				</div>
			</div>
		</nav>
	);
};
