import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";

import logo from "../../assets/logo.svg";

export default () => {
	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logo} alt="Be the Hero" />
					<h1>Register a new incident</h1>
					<p>
						Please describe the incident in details to help to find
						a hero to solve it.
					</p>

					<a href="/profile" className="nav-link">
						<FiArrowLeft size={16} color="#e02041" />
						Return to home
					</a>
				</section>
				<form>
					<input placeholder="Title" />
					<textarea placeholder="Description" />
					<input placeholder="Value" />
					<button type="submit" className="button">
						Register
					</button>
				</form>
			</div>
		</div>
	);
};
