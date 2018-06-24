import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import getPictureUrl from 'functions/getPictureUrl';

import styles from './styles';

const RestaurantHeader = ( props) => {
	
  	const { data, data: { name, formatted_address, international_phone_number, photos: [first_image] } } = props;
  	const { container, image, overlay, title, header_content, sub_title } = styles;

    return (
		<View style={container}>
			<Image
				style={image}
				source={{ uri: getPictureUrl(first_image.photo_reference) }}
			/>
			<View style={overlay} />
			<View style={header_content}>
				<Text style={title}>{name}</Text>
				<Text style={sub_title}>{formatted_address}</Text>
				<Text style={sub_title}>{international_phone_number}</Text>
			</View>
		</View>
    );
  
}

export default RestaurantHeader;
