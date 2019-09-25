// Import libraries for making a component
import React from 'react';
import {ActivityIndicator, Text, View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import {Button, Image, Card} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const deviceWidth = Dimensions.get('window').width;

// Make a component
export default class MentorProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Mentor Profile',
    headerStyle:{
      backgroundColor:  'rgba(0,122,255,0.5)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  };

  state = {
    heightBtn: 0
  };

  _onLayoutEvent = (event) => {
    this.state.heightBtn = event.nativeEvent.layout.height;
    console.log(-this.state.heightBtn);
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <ScrollView 
          contentContainerStyle = {styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}>
         
          <Card
            containerStyle = {styles.cardImageContainerStyle}>
              <Image
                  source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                  style={{width: deviceWidth, height: 200, resizeMode : 'stretch'}}
                  PlaceholderContent={<ActivityIndicator/>}/>
          </Card>

          <Card
              containerStyle = {styles.cardContainerStyle}
              wrapperStyle={{flex: 1}}>
                    
                <View style={{alignItems: 'center', }}>
                        <Text h2 style={{fontSize: 28, textAlign: 'center', fontWeight: 'bold'}}>Rany Punreach</Text>
                        
                        <TouchableOpacity disabled={true}>
                                <Text style={styles.textStyle}>Fee: 30$</Text>
                        </TouchableOpacity>
                        <Text style={{fontWeight: 'bold', paddingBottom: 5, fontSize: 12}}>Schedule: Saturday and Sunday</Text>
                        <Text style={{fontSize: 12}}><Icon name='map-pin' type='font-awesome'/> Appointments: 15</Text>
                        
                        <TouchableOpacity disabled={true} style={{width:'100%'}}>
                                <Text style={styles.textStyle}>Education</Text>
                        </TouchableOpacity>

                      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginBottom: 10}}>
                            <Icon color='blue' name="graduation-cap" type="font-awesome" size={24} style={{marginRight: 10}}/>
                            <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                                  2017: Studied 
                                    <Text style={{fontWeight: 'bold'}}> one semester at School of Computer Science and
                                                                      Engineering, Nanyang Technological University, Singapore
                                    </Text>
                            </Text>
                      </View>

                      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginBottom: 10}}>
                            <Icon color='blue' name="graduation-cap" type="font-awesome" size={24} style={{marginRight: 10}}/>
                            <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                                  2016: Studied at 
                                    <Text style={{fontWeight: 'bold'}}> Professional Android Application Development,
                                                                      Cambodia-Korea Cooperation Center, Royal University of Phnom Penh
                                    </Text>
                        </Text>
                      </View>

                      <TouchableOpacity disabled={true} style={{width:'100%'}}>
                                <Text style={styles.textStyle}>Awards and Participation</Text>
                        </TouchableOpacity>

                      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                            <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
                            <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                                  2017: 
                                    <Text style={{fontWeight: 'bold'}}> One Semester Exchange Program, Temasek</Text>
                            </Text>
                      </View>

                      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                            <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
                            <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                                  2017: 
                                    <Text style={{fontWeight: 'bold'}}> One Semester Exchange Program, Temasek</Text>
                        </Text>
                      </View>

                      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                            <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
                            <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                                  2017: 
                                    <Text style={{fontWeight: 'bold'}}> One Semester Exchange Program, Temasek</Text>
                            </Text>
                      </View>

                      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                            <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
                            <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                                  2017: 
                                    <Text style={{fontWeight: 'bold'}}> One Semester Exchange Program, Temasek</Text>
                        </Text>
                      </View>

                      <Button
                    onLayout={this._onLayoutEvent}
                    title="Subscribe"
                    onPress={() => navigation.navigate('SubscribeFormScreen')}
                    style={{
                      position: 'absolute', 
                      alignSelf: 'center', 
                      fontWeight: 'bold',
                      top: 10}}
                    buttonStyle={{backgroundColor: '#ff2b55', borderRadius: 10, width: deviceWidth*0.95}}/>

                </View>
               </Card>
        </ScrollView>
    );
  }
};

const styles = {

  cardImageContainerStyle:{
    borderColor: 'rgba(0,0,0,0)',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 0,
    padding: 0,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0)',
    shadowOpacity: 0,
    width: deviceWidth,
    shadowRadius: 0
  },

  cardContainerStyle: {
    borderRadius: 20, 
    borderColor: 'rgba(0,0,0,0.5)', 
    marginTop: 150,
    marginLeft:10,
    marginRight: 10,
    backgroundColor: '#fff', 
    width: deviceWidth*0.9
  },

  contentStyle: {
    borderRadius: 20, 
    borderColor: 'rgba(0,0,0,0.5)', 
    margin:10,
    backgroundColor: '#fff', 
    width: deviceWidth*0.9
  },
  ratingStyle: {
    backgroundColor: '#428bca',
    textAlign: 'center',
    color: '#fff',
    width: '70%',
    borderRadius: 8,
    paddingHorizontal: 5,
  },

  scrollViewStyle: {
    flexGrow: 1, 
    paddingBottom: 40,
    alignItems: 'center'
  },

  textStyle: {
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
  }
};

// Make the component available to other parts of the app
// export default MentorProfileScreen;
