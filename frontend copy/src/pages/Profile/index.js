import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import logoImg from "../../assets/logo.svg";
import { FiPower, FiTrash2 } from "react-icons/fi";

export default () => {
	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="Be the Hero" />
				<span>Welcome, XXX</span>
				<Link to="/incidents/new" className="button">
					Register a new incident
				</Link>
				<button type="button">
					<FiPower size={18} color="#E02041" />
				</button>
			</header>
			<h1>Registered Incidents</h1>
			<ul>
				<li>
					<strong>INCIDENT</strong>
					<p>Incident X</p>
					<strong>DESCRIPTION</strong>
					<p>Description of incident X</p>
					<strong>VALUE</strong>
					<p>$500.00</p>
					<button type="button">
						<FiTrash2 size={20} color=" a8a8b3" />
					</button>
				</li>
				<li>
					<strong>INCIDENT</strong>
					<p>Incident X</p>
					<strong>DESCRIPTION</strong>
					<p>Description of incident X</p>
					<strong>VALUE</strong>
					<p>$500.00</p>
					<button type="button">
						<FiTrash2 size={20} color=" a8a8b3" />
					</button>
				</li>
				<li>
					<strong>INCIDENT</strong>
					<p>Incident X</p>
					<strong>DESCRIPTION</strong>
					<p>Description of incident X</p>
					<strong>VALUE</strong>
					<p>$500.00</p>
					<button type="button">
						<FiTrash2 size={20} color=" a8a8b3" />
					</button>
				</li>
			</ul>
		</div>
	);
};
