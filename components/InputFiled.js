import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class InputField extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: true,
        };
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
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{ color: '#fff', fontSize }, styles.label]}>{labelText}</Text>
                <TextInput
                    autoCorrect={false}
                    style={[
                        { color: '#fff', borderBottomColor: borderBottom },
                        styles.inputFiled
                    ]}
                    secureTextEntry={inputType === "password"}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        marginBottom: 25
    },
    label: { fontWeight: "700", marginBottom: 10, color: '#fff', fontSize: 11 },
    inputFiled: {
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#fff',
        padding:5,
        opacity: 0.6
    }
});
export default InputField;