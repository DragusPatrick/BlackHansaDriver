import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { List, ListItem } from "native-base";
import AnotherList from "../components/lists/anotherList";
import ModalDropdown from 'react-native-modal-dropdown';

var width = Dimensions.get('window').width; //full width

class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    return fetch('https://app.blackhansa.de/api/v2/bookings/onway')
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson.model.data,
          }, function(){
          });
        })
        .catch((error) =>{
          console.error(error);
        });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={{ position: 'absolute', top: 75, width: width - 100, zIndex: 50, marginLeft: 50, marginRight: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Home')}>
              <Image style={{ width: 30, height: 30, opacity: 0.6}}
                     source={require('../assets/images/menu/2_V3-44.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '500', paddingTop: 5}}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Planned')}>
              <Image style={{ width: 30, height: 30, opacity: 0.6}}
                     source={require('../assets/images/menu/2_V3-45.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '500', paddingTop: 5}}>Pending</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Settings')}>
              <Image style={{ width: 30, height: 30, opacity: 1}}
                     source={require('../assets/images/menu/2_V3-46.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '800', paddingTop: 5}}>Accepted</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Cancelled')}>
              <Image style={{ width: 30, height: 30, opacity: 0.6}}
                     source={require('../assets/images/menu/2_V3-47.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '500', paddingTop: 5}}>Cancelled</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Offers')}>
              <Image style={{ width: 30, height: 30, opacity: 0.6}}
                     source={require('../assets/images/menu/2_V3-48.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '500', paddingTop: 5}}>Profile</Text>
            </TouchableOpacity>
          </View>


          <View style={{flexDirection: 'row', width:'100%', marginTop: 50 }}>
            <View style={{shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.7, shadowRadius: 10, backgroundColor: '#FBAF42',width: 25, height: 165, borderRadius: 20, marginTop: 35, marginLeft: -10, marginRight: 20, opacity: 0.6}}>

            </View>

            <View style={styles.headerLogo}>
              <Image style={styles.logo}
                     source={require('../assets/images/email-logo.png')} resizeMode="contain"/>
            </View>

            <View style={{shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.7, shadowRadius: 10, backgroundColor: '#FBAF42',width: 25, height: 165, borderRadius: 20, marginTop: 35, marginLeft: 20, marginRight: -10, opacity: 0.6}}>

            </View>
          </View>


          <ScrollView style={{ width: width, marginTop: 10 }}>
            <List
                dataArray={this.state.dataSource}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderRow={(item) => {
                  return (
                      <ListItem style={{ borderBottomWidth: 0, width: width }}>
                        <AnotherList data={item} />
                      </ListItem>
                  )
                }
                }
            />
          </ScrollView>
        </View>
    );
  }
}

export default SettingsScreen;

SettingsScreen.navigationOptions = {
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
    height: 225,
    width: width - 70,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#FBAF42',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    marginBottom: 15
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
    justifyContent:"center",
    alignItems:"center",
    marginTop: 100
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
