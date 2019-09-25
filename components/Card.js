import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import Button from './Button';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const deviceWidth = Dimensions.get('window').width;

const defaultStyleConfig = {
    shortName: 20,
    longName: 15,
    numOfNameToShrink: 15,
    imageSize: 140,
    iconSize: 20
};

const Card = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('MentorProfileScreen')}
            style={styles.boxStyle}>

            <Image 
                style={[styles.imageStyle, styles.createMarginBottom]} 
                source={{ uri: props.mentee.source }} />

            <Text style={[
                styles.textStyle,
                styles.createMarginBottom,
                {
                    fontSize: props.mentee.name.length > defaultStyleConfig.numOfNameToShrink ? defaultStyleConfig.longName : defaultStyleConfig.shortName
                }
            ]}>
                {props.mentee.name}
            </Text>

            <View style={[styles.rowifyStyle, styles.createMarginBottom]}>
                <FontAwesome5
                        name={"calendar-check"}
                        size={20}
                        style={styles.iconStyle}
                    />
                <Text>Appointments: {props.mentee.appointments}</Text>
            </View>

            <Button onPress={() => props.navigation.navigate('MentorProfileScreen')}>View Profile</Button>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boxStyle: {
        width: 0.9*deviceWidth/2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom:5,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 20,
        backgroundColor: 'rgba(0,122,255,0.5)',
        marginVertical: 15
    },
    imageStyle: {
        width: defaultStyleConfig.imageSize,
        height: defaultStyleConfig.imageSize,
        borderRadius: defaultStyleConfig.imageSize / 2
    },
    textStyle: {
        fontSize: defaultStyleConfig.shortName,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    iconStyle: {
        width: defaultStyleConfig.iconSize,
        height: defaultStyleConfig.iconSize,
        color: '#517fa4',
        marginHorizontal: 2.5
    },
    rowifyStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    createMarginBottom: {
        marginBottom: 7
    }
});

export default Card;