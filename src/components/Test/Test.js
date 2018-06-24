import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class Test extends Component {
	componentWillMount() {
		console.log(this.props)
	}
	render() {
		return (
			<View>
			</View>
		);
	}
}

const mapStateToProps = ({ restaurants_list }) => {
	return { restaurants_list }
};

export default connect(mapStateToProps)(Test);
