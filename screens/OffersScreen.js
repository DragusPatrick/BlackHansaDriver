import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function OffersScreen() {
  return (
      <View style={styles.container}>
        <Text style={{color: '#e15d34'}}>No Offers</Text>
      </View>
  );
}

OffersScreen.navigationOptions = {
  title: 'Offers',
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#EBEFF2',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212429',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  contentContainer: {
    flex : 0,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow:'visible',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});
