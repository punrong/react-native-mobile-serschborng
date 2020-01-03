import React from 'react';
import {Button} from "react-native-elements";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import firebase from 'firebase';

const DEVICE_WIDTH = Dimensions.get('window').width;
const defaultStyleConfig = {
    shortName: 20,
    longName: 15,
    numOfNameToShrink: 15,
    imageSize: 140,
    iconSize: 20
};

const MentorCard = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('MentorProfileScreen',
                            {  
                                navigation: props.navigation,
                                mentorProfile: props.mentor,
                                programName: props.mentor.programName
                            }
                        )}
            style={styles.boxStyle}>

            <Image 
                style={[styles.imageStyle, styles.createMarginBottom]} 
                source={{ uri: props.mentor.imageURI }}
                PlaceholderContent={<ActivityIndicator/>}/>

            <Text style={[
                styles.textStyle,
                styles.createMarginBottom,
                {
                    fontSize: props.mentor.name.length > defaultStyleConfig.numOfNameToShrink ? defaultStyleConfig.longName : defaultStyleConfig.shortName
                }
            ]}>
                {props.mentor.name}
            </Text>

            <View style={[styles.rowifyStyle, styles.createMarginBottom]}>
                <FontAwesome5
                        name={"calendar-check"}
                        size={20}
                        style={styles.iconStyle}
                    />
                <Text>Appointments: {props.mentor.appointment}</Text>
            </View>

            <Button
                    title="View Profile"
                    onPress={() => props.navigation.navigate('MentorProfileScreen',
                            {  
                                navigation: props.navigation,
                                mentorProfile: props.mentor,
                                programName: props.mentor.programName
                            }
                    )}
                    style={{
                      alignSelf: 'center',
                      alignContent: 'center',
                      marginLeft: 10,
                      marginRight: 10,
                      marginTop: 10,
                      }}
                    buttonStyle={{backgroundColor: '#007aff', borderRadius: 10, width: DEVICE_WIDTH*0.4}}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boxStyle: {
        width: 0.9*DEVICE_WIDTH/2,
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
        backgroundColor: '#fff',
        marginVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
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

export default MentorCard;