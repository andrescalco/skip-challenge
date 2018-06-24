import React from 'react';
import { Dimensions, View } from 'react-native'
import { Scene, Router, Actions, ActionConst, Stack } from 'react-native-router-flux';

// components
import TabIcon from 'components/TabIcon';

// views
import Home from 'views/Home';
import Category from 'views/Category';
import Single from 'views/Single';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="rest" tabs hideNavBar>
					<Stack icon={TabIcon} iconName="home" key="home" title="Home">
						<Scene 
							key="main" 
							component={Home} 
							initial 
							title="What To Eat ?"
						/>
						<Scene 
							key="category" 
							component={Category}
							title="Category"
						/>
						<Scene 
							key="single" 
							component={Single}
							title="Single"
						/>
					</Stack>
					<Stack icon={TabIcon} iconName="search" key="search" title="Search">
						<Scene 
							key="search_items" 
							component={Home} 
							initial 
							title="What To Eat ?"
						/>
					</Stack>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
