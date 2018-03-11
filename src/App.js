import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


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
				<LoginForm />
			</View>
		)
	}
}

export default App;