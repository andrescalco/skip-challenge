import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const RestaurantItem = (props) => {
	
	const { bigThumb, item: { name, address, score, image, price } } = props;
	let {
		thumb,
		container,
		inner_container,
		title,
		score_item,
		infos_item,
		score_text,
		price_text
	} = styles;

	if ( bigThumb ) {
		thumb = StyleSheet.flatten([thumb, { width: 75, height: 75 }]);
	}

	const click = () => {

		Actions.single({
			title: name
		})
	}

	return (
		<TouchableOpacity onPress={click}>
			<View style={container}>
				<Image style={thumb} source={{ uri: image }} />
				<View style={inner_container}>
					<View style={infos_item}>
						<Text style={title}>{name}</Text>
						<Text>{address}</Text>
						<Text style={price_text}>{price}</Text>
					</View>
					<View style={score_item}>
						<Text style={score_text}>{score}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default RestaurantItem;
