import React from "react"
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { THEME } from "../../theme";

const Loading:React.FC = () => {
	return(
		<View style={styles.container}>
			<ActivityIndicator
				color={THEME.COLORS.PRIMARY}
				size={"large"}
				/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
})

export default Loading
