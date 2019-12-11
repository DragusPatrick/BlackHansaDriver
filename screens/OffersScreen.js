import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class OffersScreen extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      content: false,
      content1: false,
      checked: false,
    }
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({
      content: !previousState.content }))
  }

  component1HideAndShow = () => {
    this.setState(previousState => ({
      content1: !previousState.content1 }))
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
                      <Image style={{ width: 30, height: 30, opacity: 1}}
                             source={require('../assets/images/menu/2_V3-48.png')} />
                      <Text style={{color: '#fff', fontSize: 9, fontWeight: '800', paddingTop: 5}}>Profile</Text>
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

                <View>
                  <TouchableOpacity onPress={this.componentHideAndShow}>
                    <View style={styles.box}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.iconImg}
                               source={require('../assets/images/2_V3-50.png')} />
                        <Text style={styles.headerText}>Details</Text>
                      </View>
                    </View>
                    <View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30}}>

                    </View>
                  {
                    this.state.content ?
                        <View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 190, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30, }}>
                          <View style={{flexDirection: 'column',  marginTop: 40, paddingLeft: 15, paddingRight: 15}}>
                            <View style={{flexDirection: 'row', marginBottom: 10}}>
                              <View style={{flexDirection: 'column'}}>
                                <Text style={{color: '#fff', fontWeight: '500', fontSize: 12 }}>Name</Text>
                                <Text style={{color: '#000'}}>Dragus Patrick</Text>
                              </View>
                            </View>

                            <View style={{flexDirection: 'row', marginBottom: 10}}>
                              <View style={{flexDirection: 'column'}}>
                                <Text style={{color: '#fff', fontWeight: '500', fontSize: 12}}>Phone Number</Text>
                                <Text style={{color: '#000'}}>0756 770 122</Text>
                              </View>
                            </View>

                            <View style={{flexDirection: 'row', marginBottom: 10}}>
                              <View style={{flexDirection: 'column'}}>
                                <Text style={{color: '#fff', fontWeight: '500', fontSize: 12}}>Email Address</Text>
                                <Text style={{color: '#000'}}>contact@codixital.com</Text>
                              </View>
                            </View>
                          </View>
                        </View> : null
                  }
                  </TouchableOpacity>
                </View>



                <View>
                  <TouchableOpacity onPress={this.component1HideAndShow}>
                    <View style={styles.box}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.iconImg}
                               source={require('../assets/images/2_V3-49.png')} />
                        <Text style={styles.headerText}>Vehicles</Text>
                      </View>
                    </View>

                  <View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30}}>

                  </View>
                    {
                      this.state.content1 ?
                          <View style={{ zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 225, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30 }}>
                            <View style={{flexDirection: 'column',  marginTop: 40, paddingLeft: 15, paddingRight: 15}}>
                              <View style={{flexDirection: 'row', marginBottom: 10}}>
                                <CheckBox
                                    center
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.checked}
                                    checkedColor='#fff'
                                    uncheckedColor='#fff'
                                    onPress={() => this.setState({checked: !this.state.checked})}
                                />
                                <View style={{flexDirection: 'column'}}>
                                  <Text style={{color: '#fff', fontWeight: '500'}}>Luxury Class</Text>
                                    <ModalDropdown options={['GL 02 DRA']}/>
                                </View>
                              </View>

                              <View style={{flexDirection: 'row'}}>
                                <CheckBox
                                    center
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.checked}
                                    checkedColor='#fff'
                                    uncheckedColor='#fff'
                                    onPress={() => this.setState({checked: !this.state.checked})}
                                />
                                <View style={{flexDirection: 'column'}}>
                                  <Text style={{color: '#fff', fontWeight: '500'}}>First Class</Text>
                                  <ModalDropdown options={['BG 5234532 ASD', 'BG 5234532 ASD','BG 5234532 ASD', 'BG 5234532 ASD']}/>
                                </View>
                              </View>

                              <View style={{flexDirection: 'row'}}>
                                <CheckBox
                                    center
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checked={this.state.checked}
                                    checkedColor='#fff'
                                    uncheckedColor='#fff'
                                    onPress={() => this.setState({checked: !this.state.checked})}
                                />
                                <View style={{flexDirection: 'column'}}>
                                  <Text style={{color: '#fff', fontWeight: '500'}}>Luxury Class</Text>
                                  <ModalDropdown options={['BG 5234532 ASD', 'BG 5234532 ASD','BG 5234532 ASD', 'BG 5234532 ASD']}/>
                                </View>
                              </View>
                            </View>
                          </View> : null
                    }
                  </TouchableOpacity>
                </View>

                <View>
                  <View style={styles.box}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={styles.iconImg}
                             source={require('../assets/images/2_V3-51.png')} />
                      <Text style={styles.headerText}>Log Out</Text>
                    </View>
                  </View>
                  {/*<View style={{zIndex: 1,shadowColor: '#FBAF42', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 35, marginRight: 35, marginTop: -30}}>*/}

                  {/*</View>*/}
                </View>
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
    logo: {
        width:'60%',
        height: 40,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 55,
    },
});
