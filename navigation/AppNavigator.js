import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';

import HomeScreen from '../screens/HomeScreen';
import OffersScreen from '../screens/OffersScreen';
import PendingScreen from '../screens/PlannedScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CancelledScreen from '../screens/CancelledScreen';
import LoginScreen from '../screens/Auth/LoginScreen';


const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Offers: { screen: OffersScreen },
    Planned: { screen: PendingScreen },
    Settings: { screen: SettingsScreen },
    Cancelled: { screen: CancelledScreen },
    Login: { screen: LoginScreen }
});


export default createAppContainer(MainNavigator);
