import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./style.css";

import api from "../../services/api";

import heroesImg from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";

export default () => {
	const history = useHistory();
	const [username, setUsername] = useState("");

	async function handleLogin(e) {
		e.preventDefault();

		try {
			const data = { id: username };
			const response = await api.post("/login", data);
			localStorage.setItem("ongId", username);
			localStorage.setItem("ongName", response.data.name);
			history.push("/profile");
		} catch (err) {
			alert(
				`An error occurred when trying to login. Error: ${e.message}`
			);
		}
	}

	return (
		<div className="login-container">
			<section className="form">
				<img src={logo} alt="Be the Hero" />
				<form onSubmit={handleLogin}>
					<h1>Please, do your login</h1>
					<input
						placeholder="Sua ID"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<button className="button" type="submit">
						Entrar
					</button>

					<Link className="nav-link" to="/register">
						<FiLogIn size={16} color="#e02041" />I don't have a
						register
					</Link>
				</form>
			</section>
			<img src={heroesImg} alt="Hero" />
		</div>
	);
};
