import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import TabBarIcon from './components/TabBarIcon'
import HomeScreen from './screens/HomeScreen'
import LinksScreen from './screens/LinksScreen'
import SettingsScreen from './screens/SettingsScreen'
import Colors from './constants/Colors'

function createStack(route, name, icon) {
	const stack = createStackNavigator({
		Item: {
			screen: route,
			navigationOptions: {
				header: null,
			},
		},
	})
	stack.navigationOptions = {
		tabBarLabel: name,
		tabBarIcon: ({ focused }) => (
			<TabBarIcon
				focused={focused}
				name={
					Platform.OS === 'ios'
						? `ios-${icon}${focused ? '' : '-outline'}`
						: `md-${icon}`
				}
			/>
		),
	}
	return stack
}

const HomeStack = createStack(HomeScreen, 'Home', 'desktop')
const MapStack = createStack(LinksScreen, 'Links', 'link')
const SettingsStack = createStack(SettingsScreen, 'Settings', 'options')

export default createSwitchNavigator({
	Main: createBottomTabNavigator({
		HomeStack,
		MapStack,
		SettingsStack,
	}, {
		tabBarOptions: {
			activeTintColor: Colors.selected,
			style: {
				backgroundColor: Colors.tabBar,
			},
		},
	}),
})