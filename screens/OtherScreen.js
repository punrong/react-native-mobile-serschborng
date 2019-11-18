import React from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;

const CONTENT = [
        {
          id: 1,
          content: 'ABOUT US',
          imageURI: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7hOQ3Q-0my6MQG0epjxSEly2BAh8Xhni0KU9_6PvKGdEUqm_A',
          screen: 'AboutUsScreen'
        },
        {
          id: 2,
          content: 'BECOME A MENTOR?',
          imageURI: 'https://content.thriveglobal.com/wp-content/uploads/2019/05/Top-7-qualities-of-the-best-mentors-in-a-business.png',
          screen: 'BecomeMentorScreen'
        },
        {
          id: 3,
          content: 'FEEDBACK',
          imageURI: 'https://knowyourteam.com/blog/wp-content/uploads/2019/08/giving-feedback-behavior-change-1024x429.jpg',
          screen: 'FeedbackScreen'
        }
]

export default class SettingsScreen extends React.Component {

    static navigationOptions = {
        title: 'Others',
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
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
              {
                CONTENT.map((item, i) => {
                  return (
                    <Card containerStyle={styles.cardContainerStyle} >
                    <TouchableOpacity 
                      style={{width:'100%'}}
                      onPress={() => this.props.navigation.navigate(item.screen)}>

                        <ListItem
                          titleStyle={styles.textStyle}
                          key={item.id}
                          title={item.content}
                          leftAvatar={<Avatar rounded large source={{uri: item.imageURI}} height={60} width={60}/>}
                        />  	    

                  </TouchableOpacity>
                  </Card>
                  );
                })
            }
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    textStyle:{
      fontSize: 20,
      fontWeight: 'bold'
    },

    cardContainerStyle: {
      paddingLeft: 6,
      paddingBottom: 6,
      paddingTop: 6,
      borderRadius: 20, 
      borderColor: 'rgba(0,0,0,0.5)',
      alignContent: 'center',
      backgroundColor: '#fff', 
      width: 0.95*DEVICE_WIDTH,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 2,  
      elevation: 5
    }
})