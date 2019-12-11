import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OffersScreen from '../screens/OffersScreen';
import PlannedScreen from '../screens/PlannedScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

HomeStack.path = '';

const OffersStack = createStackNavigator(
  {
    Offers: OffersScreen,
  },
  config
);

OffersStack.navigationOptions = {
  tabBarLabel: 'Offers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

OffersStack.path = '';

const PlannedStack = createStackNavigator(
    {
        Planned: PlannedScreen,
    },
    config
);

PlannedStack.navigationOptions = {
    tabBarLabel: 'Planned',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};

PlannedStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  OffersStack,
  PlannedStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
