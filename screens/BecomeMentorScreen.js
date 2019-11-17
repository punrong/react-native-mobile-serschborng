import React from 'react';
import { Text, View } from 'react-native';
import {Button, Input} from "react-native-elements";

export default class BecomeMentor extends React.Component {

    static navigationOptions = {
        title: 'Become a Mentor',
        headerStyle:{
          backgroundColor:  'rgba(0,122,255,0.5)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      };

    render() {
      return (
        <View style={{ flex: 1, alignContent: 'center', padding: 10 }}>
          <Input placeholder={'First Name'} containerStyle={{marginBottom: 10}} />
          <Input placeholder={'Last Name'} containerStyle={{marginBottom: 10}} />
          <Input placeholder={'Phone Number'} containerStyle={{marginBottom: 10}} />
          <Input placeholder={'Email'} containerStyle={{marginBottom: 10}} />
          <Input placeholder={"Program's Name"} containerStyle={{marginBottom: 10}} />

          <Button title={'SUBMIT'}/>
        </View>
      );
    }
  }