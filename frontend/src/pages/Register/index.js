import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { useHistory } from "react-router";

export default () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");

	const history = useHistory();

	async function handleRegister(e) {
		e.preventDefault();
		const data = { name, email, whatsapp, city, state };

		try {
			const response = await api.post("/ongs", data);
			alert(`Your registration ID is: ${response.data.id}`);
			history.push("/");
		} catch (e) {
			alert(
				`A problem occurred on creating your ID. Error: ${e.message}`
			);
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logo} alt="Be the Hero" />
					<h1>Registry</h1>
					<p>
						Please do your registration, enter into the platform and
						help people on finding incidents of your ONG.
					</p>

					<a href="/" className="nav-link">
						<FiArrowLeft size={16} color="#e02041" />I already have
						a register
					</a>
				</section>
				<form onSubmit={handleRegister}>
					<input
						placeholder="ONG's name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						placeholder="Whatsapp"
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
					/>
					<div className=" input-group">
						<input
							placeholder="City"
							value={city}
							onChange={e => setCity(e.target.value)}
						/>
						<input
							placeholder="State"
							style={{ width: "90px" }}
							value={state}
							onChange={e => setState(e.target.value)}
						/>
					</div>
					<button type="submit" className="button">
						Register
					</button>
				</form>
			</div>
		</div>
	);
};
