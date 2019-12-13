import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View, AsyncStorage,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

var width = Dimensions.get('window').width; //full width

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      name: '',
      email: '',
      error: '',
      id_token: '',
      content: ''
    }

    this._bootstrap();
  }

  _bootstrap = async () => {
    const userEmail = await AsyncStorage.getItem('userEmail');
    const userName = await AsyncStorage.getItem('userName');
    this.setState({email: userEmail, name: userName});
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({
      content: !previousState.content }))

    const headers = {
      'Authorization': 'Bearer ' + this.props.jwt
    };
  }

  render() {
    const userName = AsyncStorage.getItem('userName');
    const { name, email, error } = this.state;
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={{ position: 'absolute', top: 55, width: width - 40, zIndex: 50, marginLeft: 20, marginRight: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Home')}>
              <Image style={{ width: 30, height: 30, opacity: 1}}
                     source={require('../assets/images/menu/2_V3-44.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '800', paddingTop: 5}}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Planned')}>
              <Image style={{ width: 30, height: 30,  opacity: 0.6}}
                     source={require('../assets/images/menu/2_V3-45.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '500', paddingTop: 5}}>Pending</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Settings')}>
              <Image style={{ width: 30, height: 30, opacity: 0.6}}
                     source={require('../assets/images/menu/2_V3-46.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '500', paddingTop: 5}}>Accepted</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Cancelled')}>
              <Image style={{ width: 30, height: 30, opacity: 0.6}}
                     source={require('../assets/images/menu/2_V3-47.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '500', paddingTop: 5}}>Ended</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:"center", alignItems:"center",}} onPress={() => navigate('Offers')}>
              <Image style={{ width: 30, height: 30, opacity: 0.6}}
                     source={require('../assets/images/menu/2_V3-48.png')} />
              <Text style={{color: '#fff', fontSize: 9, fontWeight: '500 ', paddingTop: 5}}>Profile</Text>
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


          <View>
            <TouchableOpacity onPress={this.componentHideAndShow}>
              <View style={styles.box}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={styles.iconImg}
                         source={require('../assets/images/menu/2_V3-50.png')} />
                  <Text style={styles.headerText}>{name}</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{textAlign: 'center', color: '#fffdff', fontWeight: '600', fontSize: 18}}>
                    <Icon
                        name="ios-star"
                        color="#FBAF42"
                        size={20}
                        style={styles.icon}
                    /> 4.8
                  </Text>
                </View>
              </View>
              <View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30}}>

              </View>
              {
                this.state.content ?
                    <View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 200, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30, }}>
                      <View style={{flexDirection: 'column',  marginTop: 40, paddingLeft: 15, paddingRight: 15}}>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                          <Icon
                              name="ios-star"
                              color="#dbdce0"
                              size={20}
                              style={styles.mediumIcon}
                          />
                          <View>
                            <Text style={{color: '#fff'}}>Chauffeur</Text>
                            <Text style={{color: '#000'}}>4.9 based on 14 ratings</Text>
                          </View>

                        </View>

                        <View style={{flexDirection: 'row'}}>
                          <Icon
                              name="ios-star"
                              color="#dbdce0"
                              size={20}
                              style={styles.mediumIcon}
                          />
                          <View>
                            <Text style={{color: '#fff'}}>Vehicle</Text>
                            <Text style={{color: '#000'}}>5.0 based on 21 ratings</Text>
                          </View>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, textAlign: 'center'}}>
                          <View style={{textAlign: 'center', justifyContent: 'center',}}>
                            <Text style={{color: '#fff', fontSize: 21, fontWeight: '700',textAlign: 'center'}}>4.9 / 5.0</Text>
                            <Text style={{color: '#000',textAlign: 'center'}}>Based on 56 ratings</Text>
                          </View>
                        </View>
                      </View>
                    </View> : null
              }
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

export default HomeScreen;

HomeScreen.navigationOptions = {
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
  mediumIcon: {
    fontSize: 22,
    marginRight: 10,
    padding: 5,
    color: '#fffdff',
  },
  box: {
    backgroundColor: '#080808',
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
    marginTop: 75
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
    color: '#FBAF42',
  },
});
