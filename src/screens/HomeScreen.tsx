import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Tex } from '../components/StyledText'
import Styles from '../constants/Styles'

export default class HomeScreen extends React.Component {
	render() {
		return <View style={Styles.container}>
			<Tex>This is the HomeScreen</Tex>
		</View>
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#112',
	},
})
