import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const RestaurantCard = ({ label, thumbnail, category, ...rest }) => {
	const { container, image, title, overlay } = styles;
	return(
		<TouchableOpacity onPress={ () => {
			Actions.category({ title: label, category })
		} }>
			<View style={container}>
				<Image style={image} source={{ uri: thumbnail }}/>
				<View style={overlay} />
				<Text style={title}>{label}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default RestaurantCard;
