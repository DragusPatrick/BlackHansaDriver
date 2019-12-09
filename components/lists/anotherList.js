import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class AnotherList extends PureComponent {

    constructor(props) {
        super(props);

        state = {
            driver_id: "bar"
        }

        this.data = props.data;
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
                <View style={styles.box}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.iconImg}
                               source={require('../../assets/images/icons-13.png')} />

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginLeft: 15 }}>
                            <View style={{marginBottom: 5}}>
                                <Text style={{ color: '#CA8D37', fontSize: 12 }}>16:40 - 9 Dec 2019</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#fff' }}>{this.data.vehicle.bussiness_type}</Text>
                                <Text style={{ color: '#fff', fontWeight: '600' }}>5542314234</Text>
                            </View>

                            <View style={{marginTop: 5}}>
                                <Text style={{ color: '#CA8D37', fontSize: 12 }}>EUR {this.data.price} - ca. 28km</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 35, height: 35 }}
                               source={require('../../assets/images/icons-14.png')} />
                    </View>
                </View>
                <View style={{zIndex: 1,shadowColor: '#64D811', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 10, backgroundColor: '#FBAF42',height: 25, borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop: -16}}>

                </View>
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
