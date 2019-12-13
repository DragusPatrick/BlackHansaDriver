
import React, { Component } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Image,
    AsyncStorage,
    TouchableHighlight
} from "react-native";
import { Input } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import deviceStorage from '../../services/deviceStorage';
import InputField from '../../components/InputFiled'
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            email: '',
            password: '',
            error: '',
        };

        this.loginUser = this.loginUser.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    loginUser() {

        // const { email, password } = this.state;
        //
        // this.setState({ error: '', loading: true });
        //
        // // NOTE Post to HTTPS only in production
        // axios.post("https://app.blackhansa.de/api/user/login",{
        //     email: email,
        //     password: password
        // })
        // .then((response) => {
        //     console.warn(response.jwt);
        //     // deviceStorage.saveKey("id_token", response.data.jwt);
        //     this.props.newJWT(response.jwt);
        // })
        // .catch((error) => {
        //     console.log(error);
        //     this.onRegistrationFail();
        // });

        const {email, password } = this.state;

        fetch('https://app.blackhansa.de/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(function(res){ return res.json(); })
        .then((res) => {
            if (res.error) {
                alert("Aici")
            } else {
                console.warn(res);
                console.warn(res.data.auth_token)
                // AsyncStorage.setItem('jwt', res.token)
                // alert(`Success! You may now access protected content.`)
                // Redirect to home screen
            }
        })
        .catch(() => {
            alert('There was an error logging in.');
        })
        .done()
    }

    onRegistrationFail() {
        this.setState({
            error: 'Registration Failed',
            loading: false
        });
    }



    _signInAsync = async () => {
        await AsyncStorage.setItem('jwt', 'abc');
        this.props.navigation.navigate('App');
    };


    onLoginFail() {
        this.setState({
            error: 'Login Failed',
            loading: false
        });
    }

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

                            <Text style={{color: '#d6d6d6', fontWeight: '600', marginTop: 10}}>Learning app</Text>
                        </View>

                        <View style={styles.loginBody}>
                            <InputField
                                labelText="EMAIL ADDRESS"
                                labelTextSize={14}
                                labelColor={{color:'#fff'}}
                                textColor={{color:'#fff'}}
                                borderBottomColor={{color:'#fff'}}
                                inputType="email"
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })}
                            />
                            <InputField
                                labelText="PASSWORD"
                                labelTextSize={14}
                                labelColor={{color:'#fff'}}
                                textColor={{color:'#fff'}}
                                borderBottomColor={{color:'#fff'}}
                                inputType="password"
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                            />
                        </View>
                    </ScrollView>

                    <View style={styles.buttonWrapper}>
                        <TouchableHighlight style={[{ opacity: 1 }, styles.button]} onPress={this.loginUser} >
                            <Icon
                                name="angle-right"
                                color={{color: '#fff'}}
                                size={32}
                                style={styles.icon}
                            />
                        </TouchableHighlight>
                    </View>

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
    buttonWrapper: {
        alignItems: "flex-end",
        right: 20,
        bottom: 20,
        paddingTop: 0
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: '#FBAF42'
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