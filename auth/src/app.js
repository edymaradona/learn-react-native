import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCVLgd1Bm6ZGWsVVZfAwQhGoLQhZroop-o',
      authDomain: 'auth-dedb8.firebaseapp.com',
      databaseURL: 'https://auth-dedb8.firebaseio.com',
      storageBucket: 'auth-dedb8.appspot.com',
      messagingSenderId: '592640377912'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </View>
      );
      case false:
        return (
          <LoginForm />
        );
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100
  }
};

export default App;
