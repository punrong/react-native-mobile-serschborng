import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

import Button from './Button';
import Star from '../images/star.png';
import Calendar from '../images/appointment.png';
import { Linking } from 'expo';

const createStars = function (numberOfStar) {
    let stars = [];
    for (let i = 0; i < numberOfStar; i++) {
        stars.push(<Image key={i} style={styles.iconStyle} source={Star} />);
    }
    return stars;
};

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
        <View style={styles.boxStyle}>
            <Image style={[styles.imageStyle, styles.createMarginBottom]} source={{ uri: props.mentee.source }} />

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
                {createStars(props.mentee.stars)}
            </View>

            <View style={[styles.rowifyStyle, styles.createMarginBottom]}>
                <Image style={styles.iconStyle} source={Calendar} />
                <Text>Appointments: {props.mentee.appointments}</Text>
            </View>

            <Button onPress={() => props.navigation.navigate('MentorProfileScreen')}>View Profile</Button>
        </View>
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