import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

export default () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [value, setValue] = useState("");

	const history = useHistory();

	const ongId = localStorage.getItem("ongId");

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const data = { title, description, value };
			await api.post("incidents", data, {
				headers: {
					Authorization: ongId
				}
			});

			alert(`The incident was registered successfully.`);

			history.push("/profile");
		} catch (err) {
			alert(`Failed to register the new incident. Error: ${err}`);
		}
	}

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

					<Link to="/profile" className="nav-link">
						<FiArrowLeft size={16} color="#e02041" />
						Return to home
					</Link>
				</section>
				<form onSubmit={handleSubmit}>
					<input
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder="Title"
					/>
					<textarea
						value={description}
						onChange={e => setDescription(e.target.value)}
						placeholder="Description"
					/>
					<input
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder="Value"
					/>
					<button type="submit" className="button">
						Register
					</button>
				</form>
			</div>
		</div>
	);
};
