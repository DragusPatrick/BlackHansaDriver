import React, { Component, useState } from 'react';
import {Platform, View, AsyncStorage, StatusBar, StyleSheet} from 'react-native';
import Auth from './screens/Auth/LoginScreen';
import Offers from './screens/OffersScreen';
import deviceStorage from './services/deviceStorage.js';
import AppNavigator from './navigation/AppNavigator.js';
import MainTabNavigator from './navigation/MainTabNavigator';
import ActivityIndicator from "react-native-web/dist/exports/ActivityIndicator";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jwt: '',
      loading: true,
    };

    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  render() {
    if (!this.state.jwt) {
      return (
          <Auth newJWT={this.newJWT} />
      );
    } else if (this.state.jwt) {
      return (
          <AppNavigator />
      );
    }
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
  },
});
