import React from 'react'
// @ts-ignore
import { Icon } from 'expo'

import Colors from '../constants/Colors'

export default class TabBarIcon extends React.Component<{ name: String, focused: Boolean }> {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Icon.Ionicons
				name={this.props.name}
				size={24}
				style={{ marginBottom: -8 }}
				color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			/>
		)
	}
}