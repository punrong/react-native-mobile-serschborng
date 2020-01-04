import React from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class OthersScreen extends React.Component {

    render() {
      return (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <Card containerStyle={styles.cardContainerStyle} >
                <TouchableOpacity 
                    style={{width:'100%'}}
                    onPress={() => this.props.navigation.navigate('AboutUsScreen')}>
                  <ListItem
                    titleStyle={styles.textStyle}
                    title={'ABOUT US'}
                    leftAvatar={
                        <Avatar 
                            rounded 
                            large 
                            source={require('../resources/logo.png')} 
                            height={60} 
                            width={60}
                        />
                      }
                  />  	    
               </TouchableOpacity>
            </Card>
              
            <Card containerStyle={styles.cardContainerStyle} >
                <TouchableOpacity 
                  style={{width:'100%'}}
                  onPress={() => this.props.navigation.navigate('BecomeMentorScreen')}>
                    <ListItem
                        titleStyle={styles.textStyle}
                        title={'BECOME A MENTOR?'}
                        leftAvatar={
                            <Avatar 
                              rounded 
                              large 
                              source={{uri: 'https://content.thriveglobal.com/wp-content/uploads/2019/05/Top-7-qualities-of-the-best-mentors-in-a-business.png'}} 
                              height={60} 
                              width={60}
                            />
                        }
                    />  	    
                </TouchableOpacity>
            </Card>
            
            <Card containerStyle={styles.cardContainerStyle} >
              <TouchableOpacity 
                style={{width:'100%'}}
                onPress={() => this.props.navigation.navigate('FeedbackScreen')}>
                  <ListItem
                    titleStyle={styles.textStyle}
                    title={'FEEDBACK'}
                    leftAvatar={
                        <Avatar 
                          rounded 
                          large 
                          source={{uri: 'https://knowyourteam.com/blog/wp-content/uploads/2019/08/giving-feedback-behavior-change-1024x429.jpg'}} 
                          height={60} 
                          width={60}
                        />
                      }
                  />  	    
                </TouchableOpacity>
             </Card>
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