import React from 'react';
import { View, Alert } from 'react-native';
import {Button, Input} from "react-native-elements";
import { db } from '../Firebase_Config/db_config';

export default class BecomeMentorScreen extends React.Component {

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

      handleClick = () => {
        firstName = this.state.firstName
        lastName = this.state.lastName
        phoneNumber = this.state.phoneNumber
        email = this.state.email
        programName = this.state.programName
        if(firstName !=='' && lastName !=='' &&
            phoneNumber !=='' && email !=='' &&
            programName !==''){
          db.ref('MentorRegister/').push({
            firstName,
            lastName,
            phoneNumber,
            email,
            programName
          })
          Alert.alert(
            'Become a mentor',
            'Your information is submitted!\nThank you!',
              [{text: 'OK', onPress: () => this.props.navigation.goBack()}],
            {cancelable: false},
          );
        }
        if(firstName ==='' || lastName ==='' ||
            phoneNumber ==='' || email ==='' ||
            programName ===''){
              Alert.alert(
                'Become a mentor',
                'Please complete all of the information',
                  [{text: 'OK'}],
                {cancelable: false},
              );
        }
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

            <Button title={'SUBMIT'} onPress={this.handleClick.bind(this)}/>
        </View>
      );
    }
  }