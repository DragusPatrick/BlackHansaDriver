import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ModalDropdown from "react-native-modal-dropdown";
import Moment from 'moment';
import renderIf from '../../components/renderif';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class AnotherList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            content: false,
            imageURL :  'https://i.ibb.co/sCLT9R3/accepted-64.png'
        }

        this.data = props.data;
    }

    Load_New_Image=()=>{
        this.setState({
            imageURL : 'https://i.ibb.co/6DKMypS/icont-status-accepted-60.png'
        })
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
                                {renderIf(this.data.edited == 'true',
                                    <View style={{marginBottom: 7}}>
                                        <Text style={{ color: '#00B9FF', fontSize: 12, }}>{this.data.pickup_hour}:{this.data.pickup_min} - {Moment(this.data.date).format('d MMM YY')}</Text>
                                    </View>
                                )}

                                {renderIf(this.data.edited == 'false',
                                    <View style={{marginBottom: 7}}>
                                        <Text style={{ color: '#64D811', fontSize: 12, }}>{this.data.pickup_hour}:{this.data.pickup_min} - {Moment(this.data.date).format('d MMM YY')}</Text>
                                    </View>
                                )}
                                <View>
                                    <Text numberOfLines={1} style={{ color: '#fff',fontSize: 12, flexShrink: 1, maxWidth:135, marginBottom:3 }}>{this.data.pickup_address}</Text>
                                    <Text numberOfLines={1} style={{ color: '#fff',fontSize: 12, flexShrink: 1, maxWidth:135 }}>{this.data.drop_address}</Text>
                                </View>

                                <View style={{marginTop: 7}}>
                                    {renderIf(this.data.edited == 'true',
                                        <Text style={{ color: '#00B9FF', fontSize: 12 }}>EUR {this.data.price} - ca. 28km</Text>
                                    )}
                                    {renderIf(this.data.edited == 'false',
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
                            <Image style={{ width: 35, height: 35, marginLeft: 25 }}
                                   source={require('../../assets/images/mail_V3-31.png')} />
                        </View>

                    </View>
                    {renderIf(this.data.edited == 'true',
                        <View style={{zIndex: 1,shadowColor: '#00B9FF', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#00B9FF',height: 25, borderRadius: 20, marginLeft: 15, marginRight: 15, marginTop: -16}}></View>
                    )}
                    {renderIf(this.data.edited == 'false',
                        <View style={{zIndex: 1,shadowColor: '#64D811', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#64D811',height: 25, borderRadius: 20, marginLeft: 15, marginRight: 15, marginTop: -16}}></View>
                    )}

                    {
                        this.state.content ?
                            <View style={{flexDirection: 'row', zIndex: 1,shadowColor: '#00B9FF', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#fff',height: 'auto', borderRadius: 15, marginLeft: 15, marginRight: 15, marginTop: -30, }}>
                                <View style={{flexDirection: 'column',  marginTop: 40, paddingLeft: 0, paddingRight: 65, width:'80%',paddingBottom: 15}}>


                                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                            <Image style={{ width: 25, height: 25 }}
                                                   source={require('../../assets/images/icons-07.png')} />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 11}}>Pickup up location</Text>
                                            <Text style={{color: '#000',fontSize: 12}}>{this.data.pickup_address}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', marginBottom: 10, marginLeft:49}}>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 11}}>Drop off location</Text>
                                            <Text style={{color: '#000',fontSize: 12}}>{this.data.drop_address}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                            <Image style={{ width: 25, height: 25,  }}
                                                   source={require('../../assets/images/icons-08.png')} />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 11}}>Passenger Contact</Text>
                                            <Text style={{color: '#000',fontSize: 12}}>{this.data.phone}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                            <Image style={{ width: 25, height: 25,  }}
                                                   source={require('../../assets/images/icons-09.png')} />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 11}}>Pickup Sign</Text>
                                            <Text style={{color: '#000',fontSize: 12}}>{this.data.pickup_sign}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{alignItems: 'center', marginRight: 10, marginLeft:15, paddingTop: 3}}>
                                            <Image style={{ width: 25, height: 25,  }}
                                                   source={require('../../assets/images/icons-10.png')} />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color: '#A2A2A2', fontWeight: '300', fontSize: 11}}>Aditional Comment</Text>
                                            <Text style={{color: '#000',fontSize: 12}}>Lorem ipsum dolor sit met lorem ipsum dolor sit met</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{backgroundColor: '#0D0D0D', width:'20%',borderBottomRightRadius: 15,flexDirection: 'column', justifyContent: 'space-between', paddingTop:45, paddingBottom: 15, alignItems: 'center'}}>
                                    <View style={{borderBottomColor: '#fff', borderLeftBottomWidth: 1, }}>
                                        <Text style={{color: '#fff', fontWeight: '600'}}>
                                            HELP
                                        </Text>
                                    </View>

                                    <View style={{
                                        borderBottomColor: '#333333',
                                        borderBottomWidth: 1,
                                        width: 50 }}>
                                    </View>

                                    <View>
                                        <Image style={{ width: 30, height: 30 }}
                                               source={require('../../assets/images/2/accepted-58.png')} />
                                        <Text style={{color: '#fff', fontWeight: '300', fontSize: 9, paddingTop: 5}}>60 min</Text>
                                    </View>


                                    <View style={{
                                        borderBottomColor: '#333333',
                                        borderBottomWidth: 1,
                                        width: 50 }}>
                                    </View>

                                    <View>
                                        <Image style={{ width: 30, height: 30 }}
                                               source={require('../../assets/images/2/accepted-59.png')} />
                                        <Text style={{color: '#fff', fontWeight: '300', fontSize: 9, paddingTop: 5}}>Arrived</Text>
                                    </View>


                                    <View style={{
                                        borderBottomColor: '#333333',
                                        borderBottomWidth: 1,
                                        width: 50 }}>
                                    </View>

                                    <View>
                                        <Image style={{ width: 30, height: 30,justifyContent:"center", alignItems:"center", }}
                                               source={require('../../assets/images/2/accepted-60.png')} />
                                        <Text style={{color: '#fff', fontWeight: '300', fontSize: 9, paddingTop: 5}}>POB</Text>
                                    </View>


                                    <View style={{
                                        borderBottomColor: '#333333',
                                        borderBottomWidth: 1,
                                        width: 50 }}>
                                    </View>

                                    <View>
                                        <Image style={{ width: 30, height: 30,justifyContent:"center", alignItems:"center", }}
                                               source={require('../../assets/images/2/accepted-61.png')} />
                                        <Text style={{color: '#fff', fontWeight: '300', fontSize: 9, paddingTop: 5}}>Finished</Text>
                                    </View>
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
        marginTop: 25
    },
    boxEdited: {
        backgroundColor: '#000',
        zIndex: 2,
        shadowColor: "#00B9FF",
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
        marginTop: 25
    },
    box3: {
        backgroundColor: '#000',
        zIndex: 2,
        shadowColor: "#FF0012",
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
