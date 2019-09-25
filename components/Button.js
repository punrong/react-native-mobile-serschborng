import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const defaultStyleConfig = {
    backgroundColor: '#007aff',
    color: 'white'
};

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                styles.buttonStyle,
                { backgroundColor: props.backgroundColor ? props.backgroundColor : defaultStyleConfig.backgroundColor }
            ]}>
            <Text
                style={[
                    styles.textStyle,
                    { color: props.color ? props.color : defaultStyleConfig.color }
                ]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 15
    },
    textStyle: {
        paddingVertical: 5,
        paddingHorizontal: 15
    }
});

export default Button;