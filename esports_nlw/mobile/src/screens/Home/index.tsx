import React from "react"
import { View, Image, StyleSheet } from 'react-native';

import Title from "../../components/Title";

import eSportsLogo from "../../assets/logo-nlw-esports.png"

import Carousel from "../../components/Carousel";

const Home:React.FC = () => {
	return(
		<View style={styles.container}>
			<Image
				style={styles.logoContainer}
				source={eSportsLogo}
			/>

			<Title
				title="Encontre seu duo!"
				subTitle="Selecione o game que deseja jogar ..."
			/>

			<Carousel />

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		alignItems: "center"
	},

	logoContainer: {
		width: 214,
		height: 120,

		marginTop: 74,
		marginBottom: 48
	}
})

export default Home
