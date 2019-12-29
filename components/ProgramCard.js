import React from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const ProgramCard = (props) => {
    if(props.selectedProgram.program.length < 10)
      PROGRAM_TEXT_SIZE = 16;
    else 
      PROGRAM_TEXT_SIZE = 14;

    //Select appropriate text size for country's name
    if(props.selectedProgram.country.length < 10)
      COUNTRY_TEXT_SIZE = 16;
    else 
      COUNTRY_TEXT_SIZE = 14;

      
    return (
      <TouchableOpacity 
              onPress={() => 
                props.navigation.navigate('DetailScreen', 
                            {
                              navigation: props.navigation,
                              selectedProgram: props.selectedProgram
                            }
                      )}
              style={{flexWrap:'wrap', flex: 1, flexDirection: 'row'}}>
        <Card
            containerStyle = {styles.cardContainerStyle}
            key={props.selectedProgram.id}
            image={{ uri: props.selectedProgram.imageURI }}>
            <Text 
                style={{ marginBottom: 10 , textAlign: 'center', fontSize: PROGRAM_TEXT_SIZE, fontWeight: 'bold'}}>
                {props.selectedProgram.program}
            </Text>
            <Text 
                style={{ marginBottom: 10 , textAlign: 'center', fontSize: PROGRAM_TEXT_SIZE, fontWeight: 'bold'}}>
                {props.selectedProgram.degree}
            </Text>
            <Text 
                style={{ marginBottom: 10 , textAlign: 'center', fontSize: COUNTRY_TEXT_SIZE, fontWeight: 'bold'}}>
                {props.selectedProgram.country}
            </Text>
            <View 
                style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon
                    name='person'
                    color='#517fa4'/>
                <Text> Mentors: {props.selectedProgram.mentor}</Text>
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
      height: 'auto',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    }
})

export default ProgramCard;