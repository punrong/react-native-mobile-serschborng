import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native';
import { Card, ButtonGroup} from 'react-native-elements';
import MentorScreen from './MentorScreen'

const deviceWidth = Dimensions.get('window').width;

export default class HomeView extends React.Component {
  static navigationOptions = {
    title: 'Detail',
    headerStyle:{
      backgroundColor:  'rgba(0,122,255,0.5)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  };
  constructor () {
    super()

    this.state = {
      selectedIndex: 0,
      content : {
        imageURI: 
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3BEIUZOz7KXxS-sqxBFxwWQjxMlaM3A9V3Ub9gMpVKEPZJRB',
        name:
          "TF Int'l LEaRN Program at NTU",
        About:
          `The TF Int'l LEaRN Program @ NTU is funded by Temasek Foundation. Thegoal of the scholarship programme is to build bridges among student leaders in Asia, with an aim to achieve the following:
          1.Develop aglobal mindset 
          2.Form a sustained network 
          3.Work together towards regional cooperation and development 
          4.Develop leadership skills andsocail awareness`,
        Sponsorship:
          `Selected students will receive approximately $6,500 to cover their living expenses in Singapore during the exchange program.`,
        Eligibility:
          `Applicants must fullfill the following requirements: 
          1.Be nominated by RUPP or RULE 
          2.Be undergraduate students who completed at least one year of study at RUPP or RULE 
          3.Be in the top 10% of their cohort in acedemic performance 
          4.Be fluent in English 
          5.Be interested in community sesrivce and have served in leadership position`
      }
    }

    this.updateIndex = this.updateIndex.bind(this)
  }
      
  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
  }

  renderHeader(){
    const buttons = ['Description', 'Mentors']
    const { selectedIndex } = this.state
    
    return(
      <View style={{width: '100%'}}>

        <View style={{backgroundColor:'#fff'}}>

            <View
                style={{
                    marginTop: 5,
                    width: '100%',
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 1,
                  }}/>

            <ButtonGroup
                containerStyle={styles.buttonGroupStyle}
                innerBorderStyle={{width: 2, color: 'rgba(0,122,255,0.5)'}}
                textStyle={{fontSize: 14, fontWeight: '600'}}
                selectedTextStyle={{color: "#fff"}}
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}/>

            <View
              style={{
                  width: '100%',
                  borderBottomColor: 'rgba(0,0,0,0.1)',
                  borderBottomWidth: 1,}}/>

            </View>
      </View>
      )
  }

  renderContent() {
    if(this.state.selectedIndex == 0)
      return (
        <View>
          <Card
            containerStyle = {styles.cardImageContainerStyle}>
              <Image 
                  source= {{ uri: this.state.content.imageURI }} 
                  style = {{height: 100, width: '100%', resizeMode : 'stretch', margin: 5 }}
                  PlaceholderContent={<ActivityIndicator/>}/>
          </Card>
            
            <Card
              containerStyle = {styles.cardContainerStyle}
              wrapperStyle={{flex: 1}}>
                  
                  <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{this.state.content.name}</Text>
              <TouchableOpacity disabled={true} style={{width:'100%'}}>
                  <Text style={styles.textBorder}>About the Program</Text>
              </TouchableOpacity>

              <Text style={styles.textDetail}>{this.state.content.About}</Text>

              <TouchableOpacity disabled={true} style={{width:'100%'}}>
                  <Text style={styles.textBorder}>Sponsorship</Text>
              </TouchableOpacity>

              <Text style={styles.textDetail}>{this.state.content.Sponsorship}</Text>

              <TouchableOpacity disabled={true} style={{width:'100%'}}>
                  <Text style={styles.textBorder}>Eligibility</Text>
              </TouchableOpacity>

              <Text style={styles.textDetail}>{this.state.content.Eligibility}</Text>
            </Card>
        </View>
      );
    else 
      return (
        <MentorScreen navigation={this.props.navigation}/>
      )
  }

  render () {
    return (
      <ScrollView 
          contentContainerStyle = {styles.scrollViewStyle}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          
            {this.renderHeader()}

            {this.renderContent()}

        </ScrollView>     
      )
    }
}

  const styles = StyleSheet.create({

      cardImageContainerStyle:{
        borderColor: 'rgba(0,0,0,0)',
        shadowColor: 'rgba(0,0,0,0)',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 5,
        padding: 0,
        shadowOpacity: 0,
        width: deviceWidth*0.9,
        shadowRadius: 0
      },

      cardContainerStyle: {
        marginTop: 120,
        borderRadius: 20, 
        borderColor: 'rgba(0,0,0,0.5)', 
        backgroundColor: '#fff', 
        width: deviceWidth*0.9
      },

      buttonGroupStyle: {
        height: 40, 
        borderWidth: 2, 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'white',           
        borderBottomWidth: 1, 
        borderTopWidth:1, 
        borderColor: 'rgba(0,122,255,0.5)'
      },

      scrollViewStyle: {
        flexGrow: 1, 
        paddingBottom: 10,
        alignItems: 'center'
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

      textDetail: {
        fontSize: 14
      }
  })