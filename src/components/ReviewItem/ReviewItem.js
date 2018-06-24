import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const ReviewItem = (props) => {
	const { item: { author_name, text, profile_photo_url } } = props;
	const { thumb, container, header_container } = styles;
	return (
		<View style={container}>
			<View style={header_container}>
				<Image style={thumb} source={{ uri: profile_photo_url }}/>
				<Text>{author_name}</Text>
			</View>
			<Text>{text}</Text>
		</View>
	);
}

export default ReviewItem;
