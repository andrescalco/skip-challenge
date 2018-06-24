import React, { Component } from 'react';
import { SafeAreaView, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Title from 'components/Title';
import PaddingView from 'components/PaddingView';
import RestaurantItem from 'components/RestaurantItem';

class Category extends Component {
	state = {
		list: [],
		top_five: []
	}

	componentWillMount() {
		this.listCategories();
		setTimeout(() => {
			this.getTopFive();
		})
	}

	listCategories() {
		const { restaurants_list, category } = this.props;
		const regex = new RegExp(category,'i');
		const list = restaurants_list.filter( e => regex.test(e.tags) );
		this.setState({ list });
	}

	getTopFive() {
		let { list } = this.state;
		const top_five = list.splice(0,5);
		this.setState({ top_five, list });
	}

	renderTopFive() {
		const { top_five } = this.state;
		return(
			top_five.map(item => {
				return(
					<RestaurantItem key={item.image} item={item} bigThumb />
				);
			})
		);
	}

	render() {
		const { category, title } = this.props;
		const { list } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<PaddingView>
					<ScrollView>
						<Title>Top 5 in {title}</Title>
						
						<View style={{ marginTop: 15, marginBottom: 15 }}>
							{this.renderTopFive()}
						</View>

						<Title>Others Great Options</Title>
						<View style={{ marginTop: 15, marginBottom: 15 }}>
							<FlatList
								contentContainerStyle={{ flexGrow: 1 }}
								data={list}
								keyExtractor={item => item.image}
								renderItem={({item}) => (
										<RestaurantItem key={item.image} item={item} />
									)
								}
							/>
						</View>
					</ScrollView>
				</PaddingView>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = ({ restaurants_list }) => {
	return { restaurants_list };
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
}

export default connect(mapStateToProps)(Category);
