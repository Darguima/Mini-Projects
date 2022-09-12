import React from "react"
import { View, Text, StyleSheet, ViewProps } from 'react-native';

import { THEME } from "../../theme";

interface Props extends ViewProps {
	title: string,
	subTitle: string
}

const Title:React.FC<Props> = ({title, subTitle, ...rest}) => {
	return(
		<View style={styles.container} {...rest}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subTitle}>{subTitle}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 32
	},

	title: {
		color: THEME.COLORS.TEXT,
		fontFamily: THEME.FONT_FAMILY.BLACK,
		fontSize: THEME.FONT_SIZE.LG
	},

	subTitle: {
		color: THEME.COLORS.CAPTION_400,
		fontFamily: THEME.FONT_FAMILY.REGULAR,
		fontSize: THEME.FONT_SIZE.MD
	},
})

export default Title
