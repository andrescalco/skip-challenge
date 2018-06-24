import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	thumb: {
		width: 45,
		height: 45,
		marginRight: 15,
		borderRadius: 5
	},
	container: {
		flex:1,
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	inner_container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		color: '#000',
		fontSize: 15,
		fontWeight: 'bold'
	},
	score_item: {
		flex:1,
		alignItems: 'flex-end',
	},
	infos_item: {
		flex:5,
	},
	score_text: {
		padding: 7,
		paddingTop: 3,
		paddingBottom: 3,
		backgroundColor: '#E91431',
		fontWeight: '500',
		color: '#fff'
	},
	price_text: {
		color: '#aaa',
		fontSize: 12,
		marginTop: 5
	},

});

export default styles;
