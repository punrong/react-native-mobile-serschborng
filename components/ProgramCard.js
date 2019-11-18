import React from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;

const ProgramCard = (props) => {
    if(props.programList.program.length < 10)
      PROGRAM_TEXT_SIZE = 14;
    else 
      PROGRAM_TEXT_SIZE = 12;

    //Select appropriate text size for country's name
    if(props.programList.country.length < 10)
      COUNTRY_TEXT_SIZE = 16;
    else 
      COUNTRY_TEXT_SIZE = 14;

      
    return (
      <TouchableOpacity 
              onPress={() => props.navigation.navigate(
                              'DetailScreen', 
                            {
                              current_exchange: props.programList.id,
                              navigation: props.navigation
                            }
                      )}
              style={{flexWrap:'wrap', flex: 1, flexDirection: 'row'}}>
      
        <Card
            containerStyle = {styles.cardContainerStyle}
            key={props.programList.id}
            image={{ uri: props.programList.imageURI }}>
            <Text 
                style={{ marginBottom: 10 , textAlign: 'center', fontSize: PROGRAM_TEXT_SIZE, fontWeight: 'bold'}}>
                {props.programList.program}
            </Text>
            <Text 
                style={{ marginBottom: 10 , textAlign: 'center', fontSize: COUNTRY_TEXT_SIZE, fontWeight: 'bold'}}>
                {props.programList.country}
            </Text>
            <View 
                style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon
                    name='person'
                    color='#517fa4'/>
                <Text> Mentors: {props.programList.mentor}</Text>
            </View>
        </Card>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({

    cardContainerStyle: {
      paddingTop: 10,
      paddingLeft: 2,
      paddingRight: 2,
      borderRadius: 20, 
      borderColor: 'rgba(0,0,0,0.5)',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom:5,
      backgroundColor: '#fff', 
      width: 0.9*DEVICE_WIDTH/2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    }
})

export default ProgramCard;