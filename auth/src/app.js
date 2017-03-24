import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCVLgd1Bm6ZGWsVVZfAwQhGoLQhZroop-o',
      authDomain: 'auth-dedb8.firebaseapp.com',
      databaseURL: 'https://auth-dedb8.firebaseio.com',
      storageBucket: 'auth-dedb8.appspot.com',
      messagingSenderId: '592640377912'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
