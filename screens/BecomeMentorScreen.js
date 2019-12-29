import React from 'react';
import { View } from 'react-native';
import {Button, Input} from "react-native-elements";

export default class BecomeMentorScreen extends React.Component {

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

      constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          programName: ''
        };
      }

    render() {
      return (
        <View style={{ flex: 1, alignContent: 'center', padding: 10 }}>
          <Input 
              placeholder={'First Name'} 
              containerStyle={{marginBottom: 10}} 
              onChangeText={(firstName) => this.setState({firstName})}
              value={this.state.firstName}/>
          <Input 
              placeholder={'Last Name'} 
              containerStyle={{marginBottom: 10}} 
              onChangeText={(lastName) => this.setState({lastName})}
              value={this.state.lastName}/>
          <Input 
              placeholder={'Phone Number'} 
              containerStyle={{marginBottom: 10}} 
              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
              value={this.state.phoneNumber}/>
          <Input 
              placeholder={'Email'} 
              containerStyle={{marginBottom: 10}} 
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}/>
          <Input 
              placeholder={"Program's Name"} 
              containerStyle={{marginBottom: 10}} 
              onChangeText={(programName) => this.setState({programName})}
              value={this.state.programName}/>

          <Button title={'SUBMIT'}/>
        </View>
      );
    }
  }