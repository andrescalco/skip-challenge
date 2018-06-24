import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		height: 180,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		flex: 1,
		height: 180,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		flex: 1,
		height: 180,
		backgroundColor: 'rgba(0,0,0,0.3)'
	},
	title: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 25,
		textShadowColor: '#000000',
		textShadowRadius: 2,
		textShadowOffset: {
			width: 1,
			height: 1
		}
	}
});

export default styles;
