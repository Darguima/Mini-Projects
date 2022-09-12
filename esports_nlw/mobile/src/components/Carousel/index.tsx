import React from "react"
import { View, StyleSheet, FlatList } from 'react-native';

import CarouselGame from "./components/CarouselGame";

import {GAMES} from "../../utils/games"


const Carousel:React.FC = () => {
	return(
		<View style={styles.container}>
			
			<FlatList
				data={GAMES}

				keyExtractor={item => item.id}
				renderItem={({item}) => (
					<CarouselGame
						game={item}
					/>
				)}

				contentContainerStyle={styles.gamesScrollContent}

				horizontal
				showsHorizontalScrollIndicator={false}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},

	gamesScrollContent: {
		paddingLeft: 16,
		paddingRight: 32
	}
})

export default Carousel
