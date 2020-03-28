import React, { useState, useEffect } from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import logoImg from "../../assets/logo.png";

import styles from "./styles";
import api from "../../services/api";

export default () => {
	const navigation = useNavigation();
	const [incidents, setIncidents] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	function navigateToDetail(incident) {
		navigation.navigate("Detail", { incident });
	}

	async function fetchIncidents() {
		if (loading) {
			return;
		}

		if (total > 0 && incidents.length === total) {
			return;
		}

		setLoading(true);

		const response = await api.get("/incidents", {
			params: { page }
		});
		setIncidents([...incidents, ...response.data]);
		setTotal(response.headers["x-total-count"]);
		setPage(page + 1);
		setLoading(false);
	}

	useEffect(() => {
		fetchIncidents();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />
				<Text style={styles.headerText}>
					Total of
					<Text style={styles.headerTextBold}>
						{" "}
						{total} incidents.
					</Text>
				</Text>
			</View>
			<Text style={styles.title}>Welcome!</Text>
			<Text style={styles.description}>
				Choose an incident and save the day! ;)
			</Text>

			<FlatList
				style={styles.incidentList}
				data={incidents}
				keyExtractor={incident => String(incident.id)}
				// showsVerticalScrollIndicator={false}
				onEndReached={fetchIncidents}
				onEndReachedThreshold={0.2}
				renderItem={({ item: incident }) => (
					<View style={styles.incident}>
						<Text style={styles.incidentProperty}>ONG:</Text>
						<Text style={styles.incidentValue}>
							{incident.name} at {incident.city}/{incident.state}
						</Text>
						<Text style={styles.incidentProperty}>INCIDENT:</Text>
						<Text style={styles.incidentValue}>
							{incident.description}
						</Text>
						<Text style={styles.incidentProperty}>VALUE:</Text>
						<Text style={styles.incidentValue}>
							{Intl.NumberFormat("pt-BR", {
								style: "currency",
								currency: "BRL"
							}).format(incident.value)}
						</Text>
						<TouchableOpacity
							style={styles.detailsButton}
							onPress={() => navigateToDetail(incident)}
						>
							<Text style={styles.detailsButtonText}>
								See more details
							</Text>
							<Feather
								name="arrow-right"
								size={20}
								color="#e02041"
							/>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};
