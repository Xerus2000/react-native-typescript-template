import React from 'react'
import { Text, TextProps } from 'react-native'
import Colors from '../constants/Colors'

export class Tex extends React.Component<TextProps> {
	constructor(props) {
		super(props)
	}

	render() {
		return <Text {...this.props} style={[this.props.style, { color: Colors.text }]}/>
	}
}

export class MonoText extends React.Component<TextProps> {
	constructor(props) {
		super(props)
	}

	render() {
		return <Tex {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]}/>
	}
}
