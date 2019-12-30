import React from 'react';
import {ActivityIndicator, Text, View, ScrollView, Dimensions, TouchableOpacity, Platform} from 'react-native';
import {Button, Image, Card} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const DEVICE_WIDTH = Dimensions.get('window').width;

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

  constructor(props){
    super(props)
    var mentor = props.navigation.state.params.mentorProfile
    var programName = props.navigation.state.params.programName
    this.state = {
      programName: programName,
      mentor: mentor
    }
  }

  renderEducation(){
    return this.state.mentor.education.map((education, index) => {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginBottom: 10}}>
            <Icon color='blue' name="graduation-cap" type="font-awesome" size={24} style={{marginRight: 10}}/>
            <Text style={styles.textDetailContentStyle}>
                {education}
            </Text>
        </View>
      )
    });
  }

  renderAwards(){
    return this.state.mentor.award.map((awards, index) => {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginBottom: 10}}>
            <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
            <Text style={styles.textDetailContentStyle}>
                {awards}
            </Text>
        </View>
      )
    });
  }

  renderProfileImageIOS(){
    if(Platform.OS === 'ios')
    return(
      <View style={styles.cardImageContainerStyle}>
        <Image
            source={{uri: this.state.mentor.imageURI}}
            style={styles.imageStyle}
            PlaceholderContent={<ActivityIndicator/>}/>
      </View>
    )
  }

  renderProfileImageAndroid(){
    if(Platform.OS === 'android')
    return(
      <View style={{    
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 10,
      width: DEVICE_WIDTH,}}>
        <Image
            source={{uri: this.state.mentor.imageURI}}
            style={styles.imageStyle}
            PlaceholderContent={<ActivityIndicator/>}/>
      </View>
    )
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <ScrollView 
          contentContainerStyle = {styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}>

{this.renderProfileImageAndroid()}

          <Card
              containerStyle = {styles.cardContainerStyle}
              wrapperStyle={{flex: 1}}>

              <View style={styles.mentorContentStyle}>
                <Text h2 style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>{this.state.mentor.name}</Text>
                        
                <TouchableOpacity disabled={true} style={{width:'100%'}}>
                    <Text style={styles.textHeaderStyle}>Education</Text>
                </TouchableOpacity>

                    {this.renderEducation()}

                <TouchableOpacity disabled={true} style={{width:'100%'}}>
                    <Text style={styles.textHeaderStyle}>Awards and Participation</Text>
                </TouchableOpacity>

                    {this.renderAwards()}

            </View>
        </Card>
        
                    {this.renderProfileImageIOS()}

            <Button
                    title="Subscribe"
                    onPress={() => navigation.navigate('SubscribeFormScreen',
                            {
                              navigation: this.props.navigation,
                              mentorName: this.state.mentor.name,
                              mentorID: this.state.mentor.id,
                              programName: this.state.programName
                            })
                          }
                    style={styles.btnSubscriptionPositionStyle}
                    buttonStyle={styles.btnSubscriptionStyle}/>

    </ScrollView>
    );
  }
};

const styles = {

  cardImageContainerStyle:{
    position: "absolute",
    alignSelf: 'center',
    top: 10,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    width: DEVICE_WIDTH,
  },

  cardContainerStyle: {
    borderRadius: 20, 
    borderColor: 'rgba(0,0,0,0.5)', 
    ...Platform.select({
      ios:{
        marginTop: (DEVICE_WIDTH/2.5)/2,
      }
    }),
    marginLeft:10,
    marginRight: 10,
    backgroundColor: '#fff', 
    width: DEVICE_WIDTH*0.9
  },

  contentStyle: {
    borderRadius: 20, 
    borderColor: 'rgba(0,0,0,0.5)', 
    margin:10,
    backgroundColor: '#fff', 
    width: DEVICE_WIDTH*0.9
  },
  ratingStyle: {
    backgroundColor: '#428bca',
    textAlign: 'center',
    color: '#fff',
    width: '70%',
    borderRadius: 8,
    paddingHorizontal: 5,
  },

  imageStyle: {
    width: DEVICE_WIDTH/2.5, 
    height: DEVICE_WIDTH/2.5, 
    borderRadius: (DEVICE_WIDTH/2.5)/2, 
    resizeMode : 'cover',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 2,
    overflow: 'hidden',
    ...Platform.select({
      ios:{
        position: "absolute",
        alignSelf: 'center'
      }
    }),
  },

  scrollViewStyle: {
    flexGrow: 1, 
    paddingBottom: 35,
    alignItems: 'center'
  },

  mentorContentStyle:{
    flex: 1, 
    alignItems: 'center',
    ...Platform.select({
      ios:{
        marginTop: (DEVICE_WIDTH/2.5)/2
      }
    }),            
  },

  textHeaderStyle: {
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

  textDetailContentStyle : {
    flexDirection: 'row', 
    alignSelf: 'flex-start', 
    flex: 1, 
    flexWrap: 'wrap', 
    fontSize: 14
  },

  btnSubscriptionPositionStyle: {
    ...Platform.select({
      ios:{
        position: 'absolute',
        bottom: -25,
        alignSelf: 'center',
        marginTop: 10,
      }
    }), 
    alignContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  btnSubscriptionStyle: {
    backgroundColor: '#ff2b55', 
    borderRadius: 10, 
    width: DEVICE_WIDTH*0.8,
    ...Platform.select({
      android:{
        marginTop: 10,
      }
    }), 
  }
};
