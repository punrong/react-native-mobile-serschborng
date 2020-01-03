import React from 'react';
import { TextInput, View, Alert } from 'react-native';
import {Button} from "react-native-elements";
import { db } from '../Firebase_Config/db_config';

export default class FeedBackScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {feedback: ''};
      }

      handleClick = () => {
      feedback = this.state.feedback
      if(feedback !==''){
        db.ref('Feedbacks/').push({
          feedback
        })
        Alert.alert(
          'Feedback',
          'Thank you for your feedback!',
            [{text: 'OK', onPress: () => this.props.navigation.goBack()}],
          {cancelable: false},
        );
      }
    }

    render() {
      // const {navigation} = this.props.navigation;
      return (
          <View style={{ flex: 1, alignContent: 'center', padding: 10 }}>
          <TextInput
              style={{  
                borderColor: 'gray', 
                borderWidth: 1,  
                padding: 5,
                marginBottom: 10,
                height: 100
              }}
                multiline={true}
                textAlignVertical= 'top'
                placeholder="Give us feedback here!"
                onChangeText={(feedback) => this.setState({feedback})}
                value={this.state.feedback}
          />
          <Button title={'SUBMIT'} onPress={this.handleClick.bind(this)}/>
        </View>
      );
    }
  }