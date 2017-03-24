

// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';


const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);
// Create a component

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
