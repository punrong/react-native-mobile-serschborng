import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Card, Image} from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class AboutUsScreen extends React.Component {

    static navigationOptions = {
        title: 'About Us',
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
        <ScrollView 
            contentContainerStyle = {styles.scrollViewStyle}
            showsVerticalScrollIndicator={false}>
          <View>
            <Card
              containerStyle = {styles.cardImageContainerStyle}>
              <Image
                  source= {{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7hOQ3Q-0my6MQG0epjxSEly2BAh8Xhni0KU9_6PvKGdEUqm_A' }} 
                  style = {{height: DEVICE_WIDTH/3, width: DEVICE_WIDTH/3, margin: 5 }}
                  PlaceholderContent={<ActivityIndicator/>}/>
            </Card>
              
            <Card
              containerStyle = {styles.cardContainerStyle}
              wrapperStyle={{flex: 1}}>

              <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Sers Chborng</Text>

              <TouchableOpacity disabled={true} style={{width:'100%'}}>
                  <Text style={styles.textBorder}>Our Team</Text>
              </TouchableOpacity>

              <Text style={styles.textDetail}>ahah</Text>

              <TouchableOpacity disabled={true} style={{width:'100%'}}>
                  <Text style={styles.textBorder}>Our Value</Text>
              </TouchableOpacity>

              <Text style={styles.textDetail}>hah</Text>

              <TouchableOpacity disabled={true} style={{width:'100%'}}>
                  <Text style={styles.textBorder}>Our Vision</Text>
              </TouchableOpacity>

              <Text style={styles.textDetail}>haha</Text>

              <TouchableOpacity disabled={true} style={{width:'100%'}}>
                  <Text style={styles.textBorder}>Our Contact</Text>
              </TouchableOpacity>

              <Text style={styles.textDetail}>haha</Text>
            </Card>
          </View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({

    cardImageContainerStyle:{
      borderColor: 'rgba(0,0,0,0)',
      shadowColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      padding: 0,
      shadowOpacity: 0,
      width: DEVICE_WIDTH*0.9,
      shadowRadius: 0
    },

    cardContainerStyle: {
      borderRadius: 20, 
      borderColor: 'rgba(0,0,0,0.5)', 
      backgroundColor: '#fff', 
      width: DEVICE_WIDTH*0.9
    },

   textBorder: {
      color: "rgba(0,122,255,1)",
      borderWidth: 1,
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 10,
      padding: 5,
      marginBottom: 10,
      marginTop: 10,
      borderColor: "rgba(0,122,255,1)",
      textAlign: "center"
    },

    scrollViewStyle: {
      flexGrow: 1, 
      paddingBottom: 10,
      alignItems: 'center'
    },

    textDetail: {
      fontSize: 14
    }
})