import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { List, ListItem } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import List_withoutDriver  from '../components/lists/withoutDriver';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class OffersScreen extends React.Component  {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://app.blackhansa.de/test')
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){

          });

        })
        .catch((error) =>{
          console.error(error);
        });
  }

  renderTrip({ item, index }) {
    return (
        <View>

          <Icon
              name='favorite'
              size={25}
              color={item.liked ? 'red' : 'gray'}
              onPress={() => this.onLikePost({ item, index })}
          />

        </View>
    );
  }

  render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.container}>

            <View style={{ position: 'absolute', top: 55, width: width - 40, zIndex: 50, marginLeft: 20, marginRight: 20, flexDirection: 'row', justifyContent: 'space-between', }}>
              <TouchableOpacity onPress={() => navigate('Home')}>
                <Image style={{ width: 35, height: 35,  }}
                       source={require('../assets/images/icons-13.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate('Offers')}>
                <Image style={{ width: 35, height: 35,  }}
                       source={require('../assets/images/icons-13.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate('Planned')}>
                <Image style={{ width: 35, height: 35,  }}
                       source={require('../assets/images/icons-13.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate('Settings')}>
                <Image style={{ width: 35, height: 35,  }}
                       source={require('../assets/images/icons-13.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.headerLogo}>
              <Image style={styles.logo}
                     source={require('../assets/images/email-logo.png')} resizeMode="contain"/>
            </View>

            <View style={{shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.8, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop: -13, opacity: 0.6}}>

            </View>

            <View style={{shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.8, shadowRadius: 10, backgroundColor: '#FBAF42', height: 12, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginLeft: 40, marginRight: 40, marginTop: 0, opacity: 0.2}}>

            </View>

            <ScrollView>
              <View>
                <View style={styles.box}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.iconImg}
                           source={require('../assets/images/icons-13.png')} />
                    <Text style={styles.headerText}>Details</Text>
                  </View>
                </View>
                <View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30}}>

                </View>
              </View>

              <View>
                <View style={styles.box}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.iconImg}
                           source={require('../assets/images/icons-13.png')} />
                    <Text style={styles.headerText}>Vehicles</Text>
                  </View>
                </View>
                <View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30}}>

                </View>
              </View>

              <View>
                <View style={styles.box}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.iconImg}
                           source={require('../assets/images/icons-13.png')} />
                    <Text style={styles.headerText}>Log Out</Text>
                  </View>
                </View>
                <View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30}}>

                </View>
              </View>


            </ScrollView>
          </View>
      )
  }
}

export default OffersScreen;

OffersScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
  },
  headerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBAF42',
    height: '30%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#FBAF42',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  box: {
    backgroundColor: '#000',
    zIndex: 2,
    shadowColor: "#FBAF42",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    margin: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginTop: 50
  },
  boxContent: {
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'column',
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 15
  },
  icons: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
  },
  header: {
    backgroundColor: '#f2a948',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  logo: {
    width:'60%',
    height: 40,
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
    marginTop: 65
  },
  iconImg: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    padding: 5,
    color: '#fffdff',
  },
});
