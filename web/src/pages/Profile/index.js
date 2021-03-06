import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./style.css";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
import { FiPower, FiTrash2 } from "react-icons/fi";

export default () => {
	const ongId = localStorage.getItem("ongId");
	const ongName = localStorage.getItem("ongName");

	const history = useHistory();

	const [incidents, setIncidents] = useState([]);

	useEffect(() => {
		api.get("/profile", {
			headers: {
				Authorization: ongId
			}
		}).then(response => {
			setIncidents(response.data);
		});
	}, [ongId]);

	function listIncidents(incidents = []) {
		return incidents.map(incident => {
			return (
				<li key={incident.id}>
					<strong>INCIDENT</strong>
					<p>{incident.title}</p>
					<strong>DESCRIPTION</strong>
					<p>{incident.description}</p>
					<strong>VALUE</strong>
					<p>
						{Intl.NumberFormat("pt-br", {
							style: "currency",
							currency: "BRL"
						}).format(incident.value)}
					</p>
					<button
						type="button"
						onClick={() => handleDeleteIncident(incident.id)}
					>
						<FiTrash2 size={20} color=" a8a8b3" />
					</button>
				</li>
			);
		});
	}

	async function handleDeleteIncident(id) {
		try {
			await api.delete(`/incidents/${id}`, {
				headers: {
					Authorization: ongId
				}
			});

			setIncidents(incidents.filter(incident => incident.id !== id));
		} catch (err) {
			alert(
				`An error occurred when deleting incident. Error> ${err.message}`
			);
		}
	}

	function handleLogout() {
		localStorage.clear();
		history.push("/");
	}

	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="Be the Hero" />
				<span>Welcome, {ongName}</span>
				<Link to="/incidents/new" className="button">
					Register a new incident
				</Link>
				<button type="button" onClick={() => handleLogout()}>
					<FiPower size={18} color="#E02041" />
				</button>
			</header>
			<h1>Registered Incidents</h1>
			<ul>{listIncidents(incidents)}</ul>
		</div>
	);
};
