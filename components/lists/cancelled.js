import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Moment from 'moment';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import renderIf from '../../components/renderif';

class Cancelled extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            content: false,
            content3: false
        }

        this.data = props.data;
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

    component3HideAndShow = () => {
        this.setState(previousState => ({
            content3: !previousState.content3 }))
    }

    render() {
        Moment.locale('en');
            return (
                <View style={{ width: width-30 }}>
                    <TouchableOpacity onPress={this.componentHideAndShow}>
                        <View style={styles.box}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                                    {renderIf(this.data.vehicle.bussiness_type == 'Luxury Class',
                                        <Image style={styles.iconImg}
                                               source={require('../../assets/images/mail_V3-41.png')} />
                                    )}

                                    {renderIf(this.data.vehicle.bussiness_type == 'Business Class',
                                        <Image style={styles.iconImg}
                                               source={require('../../assets/images/mail_V3-39.png')} />
                                    )}

                                    {renderIf(this.data.vehicle.bussiness_type == 'First Class',
                                        <Image style={styles.iconImg}
                                               source={require('../../assets/images/mail_V3-40.png')} />
                                    )}

                                    {renderIf(this.data.vehicle.bussiness_type == 'City Class',
                                        <Image style={styles.iconImg}
                                               source={require('../../assets/images/mail_V3-37.png')} />
                                    )}

                                    {renderIf(this.data.vehicle.bussiness_type == 'Van Class',
                                        <Image style={styles.iconImg}
                                               source={require('../../assets/images/mail_V3-41.png')} />
                                    )}

                                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 13,marginTop: 5 }}>{this.data.number}</Text>
                                </View>

                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 25 }}>
                                    <View style={{marginBottom: 7}}>
                                        {renderIf(this.data.status == 'Cancelled Paid',
                                            <Text style={{ color: '#AD77FF', fontSize: 12, }}>{this.data.pickup_hour}:{this.data.pickup_min} - {Moment(this.data.date).format('d MMM YY')}</Text>
                                        )}

                                        {renderIf(this.data.status == 'Cancelled',
                                            <Text style={{ color: '#ad0012', fontSize: 12, }}>{this.data.pickup_hour}:{this.data.pickup_min} - {Moment(this.data.date).format('d MMM YY')}</Text>
                                        )}

                                        {renderIf(this.data.status == 'Finished',
                                            <Text style={{ color: '#64D811', fontSize: 12, }}>{this.data.pickup_hour}:{this.data.pickup_min} - {Moment(this.data.date).format('d MMM YY')}</Text>
                                        )}
                                    </View>

                                    <View>
                                        <Text numberOfLines={1} style={{ color: '#fff',fontSize: 12, flexShrink: 1, maxWidth:135, marginBottom:3 }}>{this.data.pickup_address}</Text>
                                        <Text numberOfLines={1} style={{ color: '#fff',fontSize: 12, flexShrink: 1, maxWidth:135 }}>{this.data.drop_address}</Text>
                                    </View>

                                    <View style={{marginTop: 7}}>
                                        {renderIf(this.data.status == 'Cancelled Paid',
                                            <Text style={{ color: '#AD77FF', fontSize: 12 }}>EUR {this.data.price} - ca. 28km</Text>
                                        )}

                                        {renderIf(this.data.status == 'Cancelled',
                                            <Text style={{ color: '#ad0012', fontSize: 12 }}>EUR {this.data.price} - ca. 28km</Text>
                                        )}

                                        {renderIf(this.data.status == 'Finished',
                                            <Text style={{ color: '#64D811', fontSize: 12 }}>EUR {this.data.price} - ca. 28km</Text>
                                        )}
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity style={{ alignItems: 'center', paddingTop: 18 }} onPress={() => this.openMap() }>
                                <Image style={{ width: 35, height: 35, marginLeft: 5 }}
                                       source={require('../../assets/images/wdots.png')} />
                            </TouchableOpacity>

                            <View style={{ justifyContent: 'center', alignItems: 'center', borderLeftColor: '#333333', borderLeftWidth: 1,}}>
                                {renderIf(this.data.status == 'Cancelled Paid',
                                    <Image style={{ width: 35, height: 35, marginLeft: 25 }}
                                           source={require('../../assets/images/mail_V3-33.png')} />
                                )}

                                {renderIf(this.data.status == 'Cancelled',
                                    <Image style={{ width: 35, height: 35, marginLeft: 25 }}
                                           source={require('../../assets/images/mail_V3-32.png')} />
                                )}

                                {renderIf(this.data.status == 'Finished',
                                    <Image style={{ width: 35, height: 35, marginLeft: 25 }}
                                           source={require('../../assets/images/mail_V3-30.png')} />
                                )}
                            </View>

                        </View>
                        {renderIf(this.data.status == 'Cancelled Paid',
                            <View style={{zIndex: 1,shadowColor: '#AD77FF', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#AD77FF',height: 25, borderRadius: 20, marginLeft: 15, marginRight: 15, marginTop: -16}}></View>
                        )}

                        {renderIf(this.data.status == 'Cancelled',
                            <View style={{zIndex: 1,shadowColor: '#ad0012', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#ad0012',height: 25, borderRadius: 20, marginLeft: 15, marginRight: 15, marginTop: -16}}></View>
                        )}

                        {renderIf(this.data.status == 'Finished',
                            <View style={{zIndex: 1,shadowColor: '#64D811', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#79f31e',height: 25, borderRadius: 20, marginLeft: 15, marginRight: 15, marginTop: -16}}></View>
                        )}

                        {
                            this.state.content ?
                                <View style={{flexDirection: 'row', zIndex: 1,shadowColor: '#AD77FF', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#fff',height: 'auto', borderRadius: 15, marginLeft: 15, marginRight: 15, marginTop: -30, }}>
                                    <View style={{flexDirection: 'column',marginTop: 5, paddingLeft: 0, paddingRight: 45, width:'100%', paddingBottom: 15}}>
                                        <View style={{flexDirection: 'column',  marginTop: 40, paddingLeft: 0, paddingRight: 65, width:'100%'}}>
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
                                                    <Text style={{color: '#000',fontSize: 12}}>{this.data.pickup_address}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View> : null
                        }
                    </TouchableOpacity>
                </View>
            )

    }
}

export default Cancelled;

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
        shadowColor: "#AD77FF",
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
        marginTop: 0
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
