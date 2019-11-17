import React from 'react';
import {View} from "react-native";
import {Button, Input} from "react-native-elements";

export default class SubscribeFormScreen extends React.Component {

  static navigationOptions = {
    title: 'Subscription Form',
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
    return(
        <View style={{padding: 10}}>
          <Input placeholder={'First Name'} containerStyle={{marginBottom: 10}} />
          <Input placeholder={'Last Name'} containerStyle={{marginBottom: 10}} />
          <Input placeholder={'Phone Number'} containerStyle={{marginBottom: 10}} />
          <Input placeholder={'Email'} containerStyle={{marginBottom: 10}} />

          <Button title={'SUBMIT'}/>
        </View>
    );
  }

}