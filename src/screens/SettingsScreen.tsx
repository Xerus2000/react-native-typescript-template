import React from 'react'
import { View } from 'react-native'
import { Tex } from '../components/StyledText'
import Styles from '../constants/Styles'

export default class SettingsScreen extends React.Component {
	render() {
		return <View style={Styles.container}>
			<Tex>This is the SettingsScreen</Tex>
		</View>
	}
}
