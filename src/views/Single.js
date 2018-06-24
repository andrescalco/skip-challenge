import React, { Component } from 'react';
import { SafeAreaView, Text, View, FlatList, Image, ScrollView, ActivityIndicator } from 'react-native';

import Title from 'components/Title';
import PaddingView from 'components/PaddingView';
import RestaurantHeader from 'components/RestaurantHeader';
import ReviewItem from 'components/ReviewItem';

import getPlaceIdByName from 'functions/getPlaceIdByName';
import getPlaceDetails from 'functions/getPlaceDetails';


class Single extends Component {
	state = {
		restaurant_info: ''
	}	
	componentWillMount() {
		const { title } = this.props;
		getPlaceIdByName(title)
		.then(({ data }) => {
			const { results } = data;
			const place_id = results[0].place_id;

			if (place_id) {
				getPlaceDetails(place_id)
				.then(({ data }) => {
					const { result } = data;
					this.setState({
						restaurant_info: result
					})
				})
			}
		})
	}

	renderReviews(reviews) {
		return(
			reviews.map(item => {
				return(
					<ReviewItem key={item.profile_photo_url} item={item} />
				);
			})
		);
	}

	render() {
		if ( this.state.restaurant_info ) {
			const { title } = this.props;
			const { restaurant_info } = this.state;
			const { rating, reviews } = restaurant_info;
			return (
				<SafeAreaView style={styles.container}>
					<ScrollView>
						<RestaurantHeader data={restaurant_info} />
						<PaddingView>
								<Title>Latest Reviews - {rating} ⋆</Title>
								<View style={styles.reviews_container}>
									{this.renderReviews(reviews)}
								</View>
						</PaddingView>
					</ScrollView>
				</SafeAreaView>
			);
		} else {
			return (
				<PaddingView>
					<ActivityIndicator />
				</PaddingView>
			)
		}
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	reviews_container: {
		marginTop: 20
	}
}


export default Single;
