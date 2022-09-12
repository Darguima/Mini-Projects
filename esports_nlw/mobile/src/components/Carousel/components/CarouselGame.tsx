import React from "react"
import { View, StyleSheet, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {LinearGradient} from "expo-linear-gradient"

import { THEME } from "../../../theme";

interface Game {
	id: string
	name: string,
	cover: ImageSourcePropType,
	ads: string
}

interface Props extends TouchableOpacityProps {
	game: Game
}


const CarouselGame:React.FC<Props> = ({game, ...rest}) => {
	return(
		<TouchableOpacity style={styles.container} {...rest}>
			<ImageBackground source={game.cover} style={styles.cover}>

			<LinearGradient
				style={styles.textContainer}
				colors={THEME.COLORS.FOOTER}
			>

				<Text style={styles.gameName}>{game.name}</Text>
				<Text style={styles.gameAds}>{game.ads} anúncio{game.ads == "1" ? "" : "s"}</Text>

			</LinearGradient>

			</ImageBackground>
			
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		marginRight: 24
	},

	cover: {
		width: 240,
		height: 320,

		justifyContent: "flex-end",

		borderRadius: 8,
		overflow: "hidden",
	},

	textContainer: {
		justifyContent: "flex-end",
		
		width: "100%",
		height: 102,

		bottom: 0,
		right: 0,
		left: 0,

		padding: 16
	},

	gameName: {
		color: THEME.COLORS.TEXT,
		fontFamily: THEME.FONT_FAMILY.BOLD,
		fontSize: THEME.FONT_SIZE.MD
	},
	
	gameAds: {
		color: THEME.COLORS.CAPTION_300,
		fontFamily: THEME.FONT_FAMILY.REGULAR,
		fontSize: THEME.FONT_SIZE.SM
	}
})

export default CarouselGame
