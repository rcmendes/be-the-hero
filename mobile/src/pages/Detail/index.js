import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default () => {
	const navigation = useNavigation();

	const route = useRoute();

	const incident = route.params.incident;

	const message = `Hello ${incident.name}, I'd like to be the hero of the <${incident.title}> incident and save the day!`;

	function navigateBack() {
		navigation.goBack();
	}

	function sendEmail() {
		MailComposer.composeAsync({
			subject: "Incident XPTO from ONG ABC, Brasilia/DF",
			recipients: [incident.email],
			body: "This is the body of the Be the Hero incident interest."
		});
	}

	function sendWhatsapp() {
		Linking.openURL(
			`whatsapp://send?phone=${incident.whatsapp}&text=${message}`
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />
				<TouchableOpacity onPress={navigateBack}>
					<Feather name="arrow-left" size={20} color="#e02041" />
				</TouchableOpacity>
			</View>
			<View style={styles.incident}>
				<Text style={[styles.incidentProperty, { marginTop: 0 }]}>
					ONG:
				</Text>
				<Text style={styles.incidentValue}>{incident.name}</Text>
				<Text style={styles.incidentProperty}>INCIDENT:</Text>
				<Text style={styles.incidentValue}>{incident.description}</Text>
				<Text style={styles.incidentProperty}>VALUE:</Text>
				<Text style={styles.incidentValue}>
					{Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL"
					}).format(incident.value)}
				</Text>
			</View>
			<View style={styles.contactBox}>
				<Text style={styles.heroTitle}>Save the Day!</Text>
				<Text style={styles.heroTitle}>
					Be the hero of this incident.
				</Text>
				<Text style={styles.heroDescription}>Get in touch:</Text>
				<View style={styles.actions}>
					<TouchableOpacity
						style={styles.action}
						onPress={sendWhatsapp}
					>
						<Text style={styles.actionText}>Whatsapp</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.action} onPress={sendEmail}>
						<Text style={styles.actionText}>E-mail</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
