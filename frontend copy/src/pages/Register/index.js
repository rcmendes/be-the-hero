import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";

import logo from "../../assets/logo.svg";

export default () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");

	function handleRegister(e) {
		e.preventDefault();
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
						onClick={e => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="E-mail"
						value={email}
						onClick={e => setEmail(e.target.value)}
					/>
					<input
						placeholder="Whatsapp"
						value={whatsapp}
						onClick={e => setWhatsapp(e.target.value)}
					/>
					<div className=" input-group">
						<input
							placeholder="City"
							value={city}
							onClick={e => setCity(e.target.value)}
						/>
						<input
							placeholder="State"
							style={{ width: "90px" }}
							value={state}
							onClick={e => setState(e.target.value)}
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
