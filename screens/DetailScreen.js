import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native';
import { Card, ButtonGroup} from 'react-native-elements';
import MentorScreen from './MentorScreen';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class DetailScreen extends React.Component {

  constructor (props) {
    super(props)
    var selectedProgram = props.navigation.state.params.selectedProgram;
    this.state = {
      selectedIndex: 0,
      programDetail : {}
    }

    this.state.programDetail =   selectedProgram
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
        <ScrollView>
          <Card
            containerStyle = {styles.cardImageContainerStyle}>
              <Image 
                  source= {{ uri: this.state.programDetail.imageURI }} 
                  style = {{height: DEVICE_HEIGHT/3, width: DEVICE_WIDTH*0.8, margin: 5, alignSelf: 'center' }}
                  resizeMode={'contain'}
                  PlaceholderContent={<ActivityIndicator/>}/>
              <Card
                containerStyle = {styles.cardContainerStyle}
                wrapperStyle={{flex: 1}}>
                    
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{this.state.programDetail.program}</Text>
                
                <TouchableOpacity disabled={true} style={{width:'100%'}}>
                    <Text style={styles.textBorder}>About the Program</Text>
                </TouchableOpacity>

                <Text style={styles.textDetail}>{this.state.programDetail.about}</Text>

                <TouchableOpacity disabled={true} style={{width:'100%'}}>
                    <Text style={styles.textBorder}>Sponsorship</Text>
                </TouchableOpacity>

                <Text style={styles.textDetail}>{this.state.programDetail.sponsor}</Text>

                <TouchableOpacity disabled={true} style={{width:'100%'}}>
                    <Text style={styles.textBorder}>Eligibility</Text>
                </TouchableOpacity>

                <Text style={styles.textDetail}>{this.state.programDetail.eligibility}</Text>
            </Card>
          </Card>
        </ScrollView>
      );
    else {
      return (
        <MentorScreen navigation={this.props.navigation}/>
      )
    }
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
        alignItems: 'center',
        margin: 5,
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