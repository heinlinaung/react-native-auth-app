import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
	componentWillMount(){
		firebase.initializeApp({
	    apiKey: "AIzaSyCg7-3452hGfAzfevwzbbB9jB0poiQu3kQ",
	    authDomain: "react-native-auth-app-3490c.firebaseapp.com",
	    databaseURL: "https://react-native-auth-app-3490c.firebaseio.com",
	    projectId: "react-native-auth-app-3490c",
	    storageBucket: "react-native-auth-app-3490c.appspot.com",
	    messagingSenderId: "775566630890"
  	})
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				<Text>An App</Text>
			</View>
		)
	}
}

export default App;