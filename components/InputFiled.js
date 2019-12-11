import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class InputField extends Component {
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
        display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10, color: '#fff' },
    inputFiled: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        paddingTop: 5,
        paddingBottom: 5,
    }
});
export default InputField;