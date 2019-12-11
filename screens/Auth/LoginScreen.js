
import React, { Component } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Image
} from "react-native";

import InputField from '../../components/InputFiled'
import NextArrowButton from "../../components/NextArrowButton";

export default class Login extends Component {
    render() {
        const {
            labelText,
            labelTextSize,
            labelColor,
            textColor,
            borderBottomColor,
            inputType,
            customStyle
        } = this.props;
        const color = labelColor || '#fff';
        const fontSize = labelTextSize || 14;
        const inputColor = textColor || '#fff';
        const borderBottom = borderBottomColor || "transparent";

        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.scrollViewWrapper}>

                    <ScrollView style={styles.scrollView}>
                        <View style={styles.loginHeader}>
                            <Image style={styles.logo}
                                   source={require('../../assets/images/logo.png')} resizeMode="contain"/>

                            <Text style={{color: '#d6d6d6', fontWeight: '600', marginTop: 10}}>blackhansa elite</Text>
                        </View>

                        <View style={styles.loginBody}>
                            <InputField
                                labelText="EMAIL ADDRESS"
                                labelTextSize={14}
                                labelColor={{color:'#fff'}}
                                textColor={{color:'#fff'}}
                                borderBottomColor={{color:'#fff'}}
                                inputType="email"
                                customStyle={{marginBottom:30}}

                            />
                            <InputField
                                labelText="PASSWORD"
                                labelTextSize={14}
                                labelColor={{color:'#fff'}}
                                textColor={{color:'#fff'}}
                                borderBottomColor={{color:'#fff'}}
                                inputType="password"
                                customStyle={{marginBottom:30}}

                            />
                        </View>
                    </ScrollView>

                    <NextArrowButton />

                </View>
            </KeyboardAvoidingView>
        );
    }
}

Login.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: '#0c0c0c',
        padding: 15
    },
    scrollViewWrapper: {
        marginTop: 40,
        flex: 1
    },
    avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex:1
    },
    logo: {
        width:'60%',
        height: 40,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        marginTop: 65
    },
    loginHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBody: {
        margin: 50
    },
});