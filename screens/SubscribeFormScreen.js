import React from 'react';
import {View, TextInput} from "react-native";
import {Button, Input} from "react-native-elements";
import { db } from '../Firebase_Config/db_config';

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

  constructor(props) {
    super(props);
    var mentorName = props.navigation.state.params.mentorName;
    var mentorID = props.navigation.state.params.mentorID;
    var programName = props.navigation.state.params.programName
    this.state = {
      mentorName: '',
      mentorID: '',
      programName: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    };
    this.state.mentorID = mentorID
    this.state.mentorName = mentorName
    this.state.programName = programName
  }

  handleClick = () => {
    mentorName = this.state.mentorName
    programName = this.state.programName
    firstName = this.state.firstName
    lastName = this.state.lastName
    phoneNumber = this.state.phoneNumber
    email = this.state.email
    if(firstName !=='' && lastName !=='' &&
        phoneNumber !=='' && email !=='' &&
        programName !=='' && mentorName !== ''){
      db.ref('MenteeRegister/').push({
        firstName,
        lastName,
        phoneNumber,
        mentorName,
        email,
        programName
      })
      alert('We will contact you shortly! Thank you!')
      this.props.navigation.goBack();
    }
  }

  render() {
    return(
        <View style={{padding: 10}}>
          {/* <TextInput editable={false} value={this.state.mentorName}/> */}
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
              value={"Mentor's Name:\t"+ this.state.mentorName} 
              containerStyle={{marginBottom: 10}} 
              editable={false}/>
          <Input 
              value={"Program's Name:\t"+ this.state.programName} 
              containerStyle={{marginBottom: 10}} 
              editable={false}/>

          <Button title={'SUBMIT'} onPress={this.handleClick.bind(this)}/>
        </View>
    );
  }

}