import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCtvw8nZ60cIo1R-hUq2HcBlNXxUDOQhLI',
      authDomain: 'manager-64287.firebaseapp.com',
      databaseURL: 'https://manager-64287.firebaseio.com',
      storageBucket: 'manager-64287.appspot.com',
      messagingSenderId: '989295079419'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
