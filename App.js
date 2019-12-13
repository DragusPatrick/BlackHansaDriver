import React, { Component } from 'react';
import Auth from './screens/Auth/LoginScreen';
import LoggedIn from './screens/OffersScreen';
import deviceStorage from './services/deviceStorage.js';
import AppNavigator from './navigation/AppNavigator.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
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
          <Auth newJWT={this.newJWT}/>
      );
    } else if (this.state.jwt) {
      return (
          <AppNavigator />
      );
    }
  }
}