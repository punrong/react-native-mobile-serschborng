import React from 'react';
import { TextInput, View } from 'react-native';
import {Button} from "react-native-elements";


export default class FeedBackScreen extends React.Component {

    static navigationOptions = {
        title: 'Feedback',
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
        this.state = {feedback: ''};
      }
    render() {
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
          <Button title={'SUBMIT'}/>
        </View>
      );
    }
  }