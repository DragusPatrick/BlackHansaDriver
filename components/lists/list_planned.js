import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Linking, Image, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import openMap from 'react-native-open-maps';
import Moment from 'moment';

var width = Dimensions.get('window').width;

class list_finished extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            content: false,
            driver_id: '7'
        }

        this.data = props.data;
    }

    updateDriver(text, field) {
        if (field == driver_id)
        {
            thi.setState({
                driver_id:text
            })
        }
    }

    submit() {
        let collection = {}
        collection.driver_id = this.state.driver_id
        console.warn(collection);

        const url = 'https://app.blackhansa.de/api/v2/booking/changeDriver/'+this.data.id;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                driver_id: '38',
            }),
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => onsole.log('Succes:', response))
    }

    getSize() {
        return {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        }
    }

    componentHideAndShow = () => {
        this.setState(previousState => ({
            content: !previousState.content }))
    }

    openMap= () => {
        console.log('open directions')
        let f = Platform.select({
            ios: () => {
                Linking.openURL('http://maps.apple.com/maps?daddr=38.7875851,-9.3906089');
            },
            android: () => {
                console.log('ANDROID')
                Linking.openURL('http://maps.google.com/maps?daddr=38.7875851,-9.3906089').catch(err => console.error('An error occurred', err));
            }
        });

        f();
    }

    render() {
        Moment.locale('en');
        return (
            <View style={{ width: width-30 }}>
                <TouchableOpacity onPress={this.componentHideAndShow}>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                                <Image style={styles.iconImg}
                                       source={require('../../assets/images/mail_V3-40.png')} />
                                <Text style={{ color: '#fff', fontWeight: '600', fontSize: 13,marginTop: 5 }}>{this.data.number}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 25 }}>
                                <View style={{marginBottom: 7}}>
                                    <Text style={{ color: '#9B9B9D', fontSize: 12, }}>{this.data.pickup_hour}:{this.data.pickup_min} - {Moment(this.data.date).format('d MMM YY')}</Text>
                                </View>

                                <View>
                                    <Text numberOfLines={1} style={{ color: '#fff',fontSize: 12, flexShrink: 1, maxWidth:135, marginBottom:3 }}>{this.data.pickup_address}</Text>
                                    <Text numberOfLines={1} style={{ color: '#fff',fontSize: 12, flexShrink: 1, maxWidth:135 }}>{this.data.drop_address}</Text>
                                </View>

                                <View style={{marginTop: 7}}>
                                    <Text style={{ color: '#9B9B9D', fontSize: 12 }}>EUR {this.data.price} - ca. 28km</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={{ alignItems: 'center', paddingTop: 18 }} onPress={() => this.openMap() }>
                            <Image style={{ width: 35, height: 35, marginLeft: 5 }}
                                   source={require('../../assets/images/wdots.png')} />
                        </TouchableOpacity>

                        <View style={{ justifyContent: 'center', alignItems: 'center', borderLeftColor: '#333333', borderLeftWidth: 1,}}>
                            <Image style={{ width: 35, height: 35, marginLeft: 25 }}
                                   source={require('../../assets/images/mail_V3-29.png')} />
                        </View>

                    </View>
                    <View style={{zIndex: 1,shadowColor: '#9B9B9D', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#9B9B9D',height: 25, borderRadius: 20, marginLeft: 15, marginRight: 15, marginTop: -16}}>

                    </View>
                    {
                        this.state.content ?
                            <View style={{flexDirection: 'row', zIndex: 1,shadowColor: '#9B9B9D', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#fff',height: 220, borderRadius: 15, marginLeft: 15, marginRight: 15, marginTop: -30, }}>
                                <View style={{flexDirection: 'column',marginTop: 5, paddingLeft: 0, paddingRight: 45, width:'80%'}}>
                                    <View style={{flexDirection: 'column',  marginTop: 40, paddingLeft: 0, paddingRight: 45, width:'80%'}}>
                                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                                            <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                                <Image style={{ width: 25, height: 25 }}
                                                       source={require('../../assets/images/mail_V3-53.png')} />
                                            </View>
                                            <View style={{flexDirection: 'column'}}>
                                                <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 11}}>Pickup up location</Text>
                                                <Text style={{color: '#000',fontSize: 12}}>{this.data.pickup_address}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'column',  marginTop: 15, paddingLeft: 0, paddingRight: 45, width:'80%'}}>
                                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                                            <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                                <Image style={{ width: 25, height: 25 }}
                                                       source={require('../../assets/images/mail_V3-54.png')} />
                                            </View>
                                            <View style={{flexDirection: 'column'}}>
                                                <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 11}}>Drop off location</Text>
                                                <Text style={{color: '#000',fontSize: 12}}>{this.data.drop_address}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>


                                <View style={{backgroundColor: '#0D0D0D', width:'20%',borderBottomRightRadius: 15,flexDirection: 'column', justifyContent: 'space-between', paddingTop:50, paddingBottom: 30, alignItems: 'center'}}>
                                    <View>
                                        <Image style={{ width: 30, height: 30,justifyContent: 'center',
                                            alignItems: 'center', }}
                                               source={require('../../assets/images/mail_V3-32.png')} />
                                        <Text style={{color: '#fff', fontWeight: '300', fontSize: 9, paddingTop: 5}}>Refuse</Text>
                                    </View>


                                    <View style={{
                                        borderBottomColor: '#333333',
                                        borderBottomWidth: 1,
                                        width: 50 }}>
                                    </View>

                                    <View >
                                        <TouchableOpacity onPress={() => this.submit()}>
                                            <Image style={{ width: 30, height: 30, justifyContent: 'center',
                                                alignItems: 'center', }}
                                                   source={require('../../assets/images/mail_V3-30.png')} />
                                            <Text style={{color: '#fff', fontWeight: '300', fontSize: 9, paddingTop: 5}}>Accept</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View> : null
                    }
                </TouchableOpacity>
            </View>
        )

    }
}

export default list_finished;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0c0c0c',
    },
    headerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBAF42',
        height: '25%',
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
        shadowColor: "#9B9B9D",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        margin: 0,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        marginTop: 0,
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
        justifyContent: "center",
        alignItems: "center",

    },
    icon: {
        fontSize: 18,
        marginRight: 10,
        padding: 5,
        color: '#fffdff',
    },
});
