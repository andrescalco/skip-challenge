import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TabIcon = ({ iconName, tintColor }) => {
	return(
		<Icon
			color={tintColor}
			name={iconName}
			size={26}
		/>
	);
}

export default TabIcon;
