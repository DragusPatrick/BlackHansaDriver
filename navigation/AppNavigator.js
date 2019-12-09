import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OffersScreen from '../screens/OffersScreen';
import PlannedScreen from '../screens/PlannedScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Offers: {screen: OffersScreen},
    Planned: { screen: PlannedScreen },
    Settings: { screen: SettingsScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
