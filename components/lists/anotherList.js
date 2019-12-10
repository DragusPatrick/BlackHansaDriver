import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class AnotherList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            content: false
        }

        state = {
            driver_id: "bar"
        }

        this.data = props.data;
    }

    componentHideAndShow = () => {
        this.setState(previousState => ({
            content: !previousState.content }))
    }

    getSize() {
        return {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        }
    }

    render() {
        return (
            <View style={{ width: width-30 }}>
                <TouchableOpacity onPress={this.componentHideAndShow}>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={styles.iconImg}
                                   source={require('../../assets/images/mail_V3-40.png')} />

                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginLeft: 15 }}>
                                <View style={{marginBottom: 5}}>
                                    <Text style={{ color: '#568A1A', fontSize: 12 }}>16:40 - 9 Dec 2019</Text>
                                </View>

                                <View>
                                    <Text style={{ color: '#fff' }}>First Class</Text>
                                    <Text style={{ color: '#fff', fontWeight: '600' }}>5542314234</Text>
                                </View>

                                <View style={{marginTop: 5}}>
                                    <Text style={{ color: '#568A1A', fontSize: 12 }}>EUR {this.data.price} - ca. 28km</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', borderLeftColor: '#333333', borderLeftWidth: 1,}}>
                            <Image style={{ width: 35, height: 35, marginLeft: 25 }}
                                   source={require('../../assets/images/icons-14.png')} />
                        </View>
                    </View>
                    <View style={{zIndex: 1,shadowColor: '#64D811', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#64D811',height: 25, borderRadius: 20, marginLeft: 15, marginRight: 15, marginTop: -16}}>

                    </View>
                    {
                        this.state.content ?
                            <View style={{flexDirection: 'row', zIndex: 1,shadowColor: '#64D811', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#fff',height: 325, borderRadius: 15, marginLeft: 15, marginRight: 15, marginTop: -30, }}>
                                <View style={{flexDirection: 'column',  marginTop: 40, paddingLeft: 0, paddingRight: 45, width:'80%'}}>
                                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                            <Image style={{ width: 25, height: 25 }}
                                                   source={require('../../assets/images/icons-07.png')} />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 13}}>Pickup up location</Text>
                                            <Text style={{color: '#000',fontSize: 14}}>{this.data.pickup_address}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', marginBottom: 10, marginLeft:49}}>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 13}}>Drop off location</Text>
                                            <Text style={{color: '#000',fontSize: 14}}>{this.data.drop_address}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                            <Image style={{ width: 25, height: 25,  }}
                                                   source={require('../../assets/images/icons-08.png')} />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 13}}>Passenger Contact</Text>
                                            <Text style={{color: '#000',fontSize: 14}}>0756 770 122</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                            <Image style={{ width: 25, height: 25,  }}
                                                   source={require('../../assets/images/icons-09.png')} />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 13}}>Pickup Sign</Text>
                                            <Text style={{color: '#000',fontSize: 14}}>BLACKHANSA</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                            <Image style={{ width: 25, height: 25,  }}
                                                   source={require('../../assets/images/icons-10.png')} />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 13}}>Aditional Comment</Text>
                                            <Text style={{color: '#000',fontSize: 14}}>Lorem ipsum dolor sit met lorem ipsum dolor sit met</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{backgroundColor: '#0D0D0D', width:'20%',borderBottomRightRadius: 15,flexDirection: 'column', justifyContent: 'space-between', paddingTop:45, paddingBottom: 15, alignItems: 'center'}}>
                                    <View style={{borderBottomColor: '#fff', borderLeftBottomWidth: 1, }}>
                                        <Text style={{color: '#fff', fontWeight: '600'}}>
                                            HELP
                                        </Text>
                                    </View>

                                    <Image style={{ width: 30, height: 30 }}
                                           source={require('../../assets/images/mail_V3-34.png')} />

                                    <Image style={{ width: 30, height: 30 }}
                                           source={require('../../assets/images/mail_V3-35.png')} />

                                    <Image style={{ width: 30, height: 30 }}
                                           source={require('../../assets/images/mail_V3-55.png')} />

                                    <Image style={{ width: 30, height: 30 }}
                                           source={require('../../assets/images/mail_V3-36.png')} />
                                </View>
                            </View> : null
                    }
                </TouchableOpacity>
            </View>
        )

    }
}

export default AnotherList;

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
        shadowColor: "#64D811",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.53,
        shadowRadius: 10,
        elevation: 5,
        margin: 0,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        marginTop: 30
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
