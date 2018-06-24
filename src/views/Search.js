import React, { Component } from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView } from 'react-native';
import PaddingView from 'components/PaddingView';
import { connect } from 'react-redux';

class Search extends Component {
	state = {
		search: ''
	}
	
	searchRestaurants = (e) => {
		this.setState({ search: e });
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<PaddingView>
					<ScrollView>
						<View style={styles.search_container}>
							<TextInput
								value={this.state.search}
								onChangeText={this.searchRestaurants}
								placeholder="Search for restaurants"
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
