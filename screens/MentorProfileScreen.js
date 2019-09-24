// Import libraries for making a component
import React from 'react';
import {ActivityIndicator, Text, View, ScrollView, Dimensions} from 'react-native';
import {Button, Header, Image, Rating} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

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
    // this.setState({
    //   heightBtn: event.nativeEvent.layout.height
    // });
    this.state.heightBtn = event.nativeEvent.layout.height;
    console.log(-this.state.heightBtn);
  };

  render() {
    const navigation = this.props.navigation;
    const screenHeight = Dimensions.get('window').height;

    return (

        <View style={{flex: 1, position: 'relative'}}>

          {/*<Header centerComponent={{ text: 'Sers Chborng', style: { color: '#fff' } }} />*/}

          <View style={{paddingHorizontal: 3}}>
            <Image
                source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                style={{width: '100%', height: 200}}
                PlaceholderContent={<ActivityIndicator/>}
            />
          </View>

          <View style={{flex: 1, paddingHorizontal: 20, borderColor: 'blue', borderWidth: 1, borderStyle: 'solid'}}>

            <ScrollView
                style={styles.contentStyle}
                stickyHeaderIndices={[1]}
            >
              <View style={{alignItems: 'center', position: 'relative'}}>
                <Text h2 style={{fontSize: 28, textAlign: 'center', fontWeight: 'bold'}}>Rany Punreach</Text>
                <Rating
                    type='custom'
                    imageSize={30}
                    style={{marginVertical: 5}}
                />
                <View style={styles.ratingStyle}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>Success Rate: 90%</Text>
                </View>
                <Text style={styles.feeStyle}>Free: 30$</Text>
                <Text style={{fontWeight: 'bold', paddingVertical: 5, fontSize: 12}}>Contact method: Face-to-Face &
                  Chatroom</Text>
                <Text style={{fontWeight: 'bold', paddingBottom: 5, fontSize: 12}}>Schedule: Saturday and Sunday</Text>
                <Text style={{fontSize: 12}}><Icon name='map-pin' type='font-awesome'/> Appointments: 15</Text>

                <Text style={styles.educationStyle}>Education</Text>

                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginBottom: 10}}>
                  <Icon color='blue' name="graduation-cap" type="font-awesome" size={24} style={{marginRight: 10}}/>
                  <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                    2016 - Present: Pursue <Text style={{fontWeight: 'bold'}}>bachelor's degree at Department of Computer
                    Science, Royal University of Phnom Penh</Text>
                  </Text>
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginBottom: 10}}>
                  <Icon color='blue' name="graduation-cap" type="font-awesome" size={24} style={{marginRight: 10}}/>
                  <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                    2017: Studied <Text style={{fontWeight: 'bold'}}>one semester at School of Computer Science and
                    Engineering, Nanyang Technological University, Singapore</Text>
                  </Text>
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginBottom: 10}}>
                  <Icon color='blue' name="graduation-cap" type="font-awesome" size={24} style={{marginRight: 10}}/>
                  <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                    2016: Studied at <Text style={{fontWeight: 'bold'}}>Professional Android Application Development,
                    Cambodia-Korea Cooperation Center, Royal University of Phnom Penh</Text>
                  </Text>
                </View>

                <Text style={styles.educationStyle}>Awards and Participations</Text>

                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                  <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
                  <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                    2017: <Text style={{fontWeight: 'bold'}}>One Semester Exchange Program, Temasek</Text>
                  </Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                  <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
                  <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                    2017: <Text style={{fontWeight: 'bold'}}>One Semester Exchange Program, Temasek</Text>
                  </Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                  <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
                  <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                    2017: <Text style={{fontWeight: 'bold'}}>One Semester Exchange Program, Temasek</Text>
                  </Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                  <Icon color='blue' name="star" type="font-awesome" size={24} style={{marginRight: 10}}/>
                  <Text style={{flexDirection: 'row', alignSelf: 'flex-start', flex: 1, flexWrap: 'wrap', fontSize: 12}}>
                    2017: <Text style={{fontWeight: 'bold'}}>One Semester Exchange Program, Temasek</Text>
                  </Text>
                </View>

              </View>

              <Button
                  onLayout={this._onLayoutEvent}
                  title="Subscribe"
                  onPress={() => navigation.navigate('SubscribeFormScreen')}
                  style={{position: 'absolute', width: '94%', top: 0, left: '3%'}}
                  buttonStyle={{backgroundColor: '#ff2b55', borderRadius: 5}}
              />
            </ScrollView>

          </View>

        </View>

    );
  }
};

const styles = {
  contentStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 10,
    width: '100%', height: 550,
    position: 'absolute',
    start: 20,
    top: -70,
    flex: 1,
    // alignItems: 'center',
    paddingHorizontal: 5,
  },
  ratingStyle: {
    backgroundColor: '#428bca',
    textAlign: 'center',
    color: '#fff',
    width: '70%',
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  feeStyle: {
    marginTop: 5,
    borderColor: '#428bca',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#428bca',
  },
  educationStyle: {
    marginTop: 5,
    borderColor: '#428bca',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#428bca',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  }
};

// Make the component available to other parts of the app
// export default MentorProfileScreen;
