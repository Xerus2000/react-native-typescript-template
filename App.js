import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import Navigation from './src/Navigation'
import Colors from './src/constants/Colors'

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	}

	render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading style={{ backgroundColor: Colors.background }}
							startAsync={this._loadResourcesAsync}
							onError={this._handleLoadingError}
							onFinish={() => this.setState({ isLoadingComplete: true })}
				/>
			)
		} else {
			return (
				<View style={{ flex: 1 }}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
					<Navigation/>
				</View>
			)
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
			]),
			Font.loadAsync({
			}),
		]).then(() => {
		})
	}

	_handleLoadingError = error => {
		console.warn(error)
	}

}
