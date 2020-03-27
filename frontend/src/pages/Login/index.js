import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./style.css";

import heroesImg from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";

export default () => {
	return (
		<div className="login-container">
			<section className="form">
				<img src={logo} alt="Be the Hero" />
				<form>
					<h1>Please, do your login</h1>
					<input placeholder="Sua ID" />
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
