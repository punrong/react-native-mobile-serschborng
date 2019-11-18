import React from 'react';
import {ActivityIndicator, Text, View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import {Button, Image, Card} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const DEVICE_WIDTH = Dimensions.get('window').width;
const MENTOR_BACKGROUND = [
  {
    id: 1,
    name: `RANY PUNRONG`,
    education: [
      `2017: Studied one semester at School of Computer Science and Engineering, Nanyang Technological University, Singapore`,
      `2016: Studied Professional Android Application Development,Cambodia-Korea Cooperation Center, Royal University of Phnom Penh`
    ],
    awards: [
      `2019: Summer internship program at GIST, Korea`,
      `2019: Summer internship program at GIST, Korea`,
      `2017: One Semester Exchange Program, Temasek Foundation International`
    ]
  },
  {
    id: 2,
    name: 'RANY PUNREACH',
    education: [
      `2017: Studied one semester at School of Computer Science and Engineering, Nanyang Technological University, Singapore`,
      `2016: Studied Professional Android Application Development,Cambodia-Korea Cooperation Center, Royal University of Phnom Penh`
    ],
    awards: [
      `2019: Summer internship program at GIST, Korea`,
      `2017: One Semester Exchange Program, Temasek Foundation International`
    ]
  }
]

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

  constructor(){
    super()
    this.state = {
      mentor: MENTOR_BACKGROUND.find((item) => {
        return item.id === 1
      })
    }
  }

  _onLayoutEvent = (event) => {
    this.state.heightBtn = event.nativeEvent.layout.height;
  };

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
    return this.state.mentor.awards.map((awards, index) => {
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
                  style={{width: DEVICE_WIDTH, height: 200, resizeMode : 'stretch'}}
                  PlaceholderContent={<ActivityIndicator/>}/>
          </Card>

          <Card
              containerStyle = {styles.cardContainerStyle}
              wrapperStyle={{flex: 1}}>
                    
              <View style={{alignItems: 'center', }}>
                <Text h2 style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>{this.state.mentor.name}</Text>
                        
                <TouchableOpacity disabled={true} style={{width:'100%'}}>
                    <Text style={styles.textHeaderStyle}>Education</Text>
                </TouchableOpacity>

                    {this.renderEducation()}

                <TouchableOpacity disabled={true} style={{width:'100%'}}>
                    <Text style={styles.textHeaderStyle}>Awards and Participation</Text>
                </TouchableOpacity>

                    {this.renderAwards()}

                <Button
                    onLayout={this._onLayoutEvent}
                    title="Subscribe"
                    onPress={() => navigation.navigate('SubscribeFormScreen')}
                    style={styles.btnSubscriptionPositionStyle}
                    buttonStyle={styles.btnSubscriptionStyle}/>
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
    width: DEVICE_WIDTH,
    shadowRadius: 0
  },

  cardContainerStyle: {
    borderRadius: 20, 
    borderColor: 'rgba(0,0,0,0.5)', 
    marginTop: 150,
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

  scrollViewStyle: {
    flexGrow: 1, 
    paddingBottom: 10,
    alignItems: 'center'
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
    fontSize: 12
  },

  btnSubscriptionPositionStyle: {
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },

  btnSubscriptionStyle: {
    backgroundColor: '#ff2b55', 
    borderRadius: 10, 
    width: DEVICE_WIDTH*0.8
  }
};
