import React from 'react'
import { View } from 'react-native'
import Styles from '../constants/Styles'
import { Tex } from '../components/StyledText'

export default class LinksScreen extends React.Component {

	render() {
		return <View style={Styles.container}>
			<Tex>This is the LinksScreen</Tex>
		</View>
	}

}