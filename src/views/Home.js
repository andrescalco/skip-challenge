import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, FlatList } from 'react-native';
import RestaurantCard from 'components/RestaurantCard';

class Home extends Component {
	render() {
		const { categories_list } = this.props;
		return (
			<SafeAreaView>
					<FlatList
						data={categories_list}
						keyExtractor={item => item.label}
						renderItem={({item}) => (
								<RestaurantCard
									key={item.label}
									label={item.label} 
									thumbnail={item.thumbnail}
									category={item.category}
								/>
							)
						}
					/>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = ({ categories_list }) => {
	return { categories_list }
}

export default connect(mapStateToProps)(Home);