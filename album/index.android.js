// Index.ios.js - place in here for Andoid

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  // Component nesting
  <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
  </View>
);


// Render it to the device
AppRegistry.registerComponent('album', () => App);
