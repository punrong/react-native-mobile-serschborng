import React from 'react';
import { StyleSheet, ScrollView, View, Modal, Text, Dimensions, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import ProgramCard from '../components/ProgramCard';
import { db } from '../Firebase_Config/db_config';
  
  var PROGRAM_DATA =[];
  const PROGRAM_TYPE = ['exchange', 'scholarship', 'competition'];
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;
 
export default class HomeScreen extends React.Component {

  constructor (props) {
    super(props) 
    this.state = {
      modalVisible: true,
      selectedIndex: 0, //Button Group index
      //Default Display: Exchange Program
      programList : []
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount() {
    let programList = [];
       let ref = db.ref('Programs/');
       let message = ref.once('value', async (snapshot) => {
        snapshot.forEach( await function(childSnapshot) {
          programList = {
            id:  childSnapshot.val().id,
            program:  childSnapshot.val().name,
            type:  childSnapshot.val().type,
            degree:  childSnapshot.val().degree,
            country:  childSnapshot.val().country,
            link:  childSnapshot.val().link,
            imageURI:  childSnapshot.val().imageURI,
            about:  childSnapshot.val().about,
            eligibility:  childSnapshot.val().eligibility,
            sponsor:  childSnapshot.val().sponsor,
            apply:  childSnapshot.val().apply,
            mentor:  childSnapshot.val().mentor,
          }
          PROGRAM_DATA.push(programList);
        })
        this.setState({programList: PROGRAM_DATA.filter((item) =>{
          return item.type === PROGRAM_TYPE[0];
        })});
        this.setState({modalVisible: false})
      });
  }
  //Update ButtonGroup Index 
  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
    this.state.programList = [];

      switch(selectedIndex){
        case 0:
          this.state.programList = PROGRAM_DATA.filter((item) =>{
            return item.type === PROGRAM_TYPE[0];
          })
          break;

        case 1:
          this.state.programList = PROGRAM_DATA.filter((item) =>{
            return item.type === PROGRAM_TYPE[1];
          })
          break;

        case 2:
            this.state.programList = PROGRAM_DATA.filter((item) =>{
              return item.type === PROGRAM_TYPE[2];
            })
          break;
      }
  }

  renderHeader(){
    const buttons = ['Exchange', 'Scholarship', 'Competition']
    const { selectedIndex } = this.state
    return(
      <View style={{width: '100%'}}>
        <View style={{backgroundColor:'#fff'}}>

            {/* make horizontal divider as straight  line   */}
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

            {/* make horizontal divider as straight  line   */}
            <View
              style={{
                  width: '100%',
                  borderBottomColor: 'rgba(0,0,0,0.1)',
                  borderBottomWidth: 1,
                  marginBottom: 5
              }}/>
            </View>
      </View>
      )
  }

  renderAllCards(navigation) {
    //Iteration to retrieve array's value to Card
    return this.state.programList.map((selectedProgram, index) => {
       return (
          <View key={selectedProgram.id}>
             <ProgramCard selectedProgram={selectedProgram} navigation={navigation}/>
          </View>
          )
    });
 }

  render () {
    // "this.props.navigation" only work in render() 
    // To use it in another function, we need to pass this as a parameter
    const navigation = this.props.navigation
    if(this.state.modalVisible)
      return(
        <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}>
      <View style={{justifyContent: 'center', alignItems: 'center' , flex: 1,
        flexDirection: 'column',}}>
            <Image  
                  source= {{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7hOQ3Q-0my6MQG0epjxSEly2BAh8Xhni0KU9_6PvKGdEUqm_A' }} 
                  style = {{height: DEVICE_HEIGHT/3, width: DEVICE_WIDTH*0.8, alignSelf: 'center' }}
                  resizeMode={'contain'}
                  PlaceholderContent={<ActivityIndicator/>}/>
      </View>
    </Modal>
      )
    return (
      <ScrollView 
          contentContainerStyle = {styles.scrollViewStyle}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          
        {this.renderHeader()}

        {
           <View style = { styles.cardListStyle }>
             {this.renderAllCards(navigation)}
           </View>
        }
      </ScrollView>     
      )
    }
}

  const styles = StyleSheet.create({
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
    },
      scrollViewStyle: {
        flexGrow: 1, 
        paddingBottom: 10,
        alignItems: 'center'
      },

      buttonGroupStyle: {
        height: 40, 
        borderWidth: 2, 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'white',           
        margin: 10, 
        borderBottomWidth: 1, 
        borderTopWidth:1, 
        borderColor: 'rgba(0,122,255,0.5)'
      },

      textBorder: {
        color: "rgba(0,122,255,1)",
        borderWidth: 1,
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10,
        padding: 5,
        borderColor: "rgba(0,122,255,1)",
        textAlign: "center"
      },

      textBorderLess: {
        fontSize: 16,
        margin: 10,
        textAlign: "center"
      },

      cardListStyle:{
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
     }
  })