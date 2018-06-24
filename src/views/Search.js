import React, { Component } from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView, FlatList } from 'react-native';
import RestaurantItem from 'components/RestaurantItem';
import PaddingView from 'components/PaddingView';
import { connect } from 'react-redux';

class Search extends Component {
	componentDid

	state = {
		search: '',
		result: []
	}

	componentDidMount() {
		this.setState({ result: [] })
	}

	
	searchRestaurants = (e) => {
		const { search } = this.state;
		const regex = new RegExp(search,'i');
		const result = this.props.restaurants_list.filter( e => regex.test(e.name) );
		this.setState({ result });
		setTimeout(() => {
			this.setState({ search: '' });
			this.refs.search.blur()
		})
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<PaddingView>
					<ScrollView>
						<View style={styles.search_container}>
							<TextInput
								ref="search"
								value={this.state.search}
								onChangeText={ search => { this.setState({ search }) } }
								onBlur={this.searchRestaurants}
								placeholder="Search for restaurants"
							/>
						</View>
						<View style={{ marginTop: 15, marginBottom: 15 }}>
							<FlatList
								contentContainerStyle={{ flexGrow: 1 }}
								data={this.state.result}
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
	},
	search_container: {
		padding: 10,
		backgroundColor: '#eaeaea',
		borderRadius: 5
	}
}

export default connect(mapStateToProps)(Search);
