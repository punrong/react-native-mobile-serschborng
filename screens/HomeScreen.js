import React from 'react';
import { StyleSheet, Text, ScrollView, Dimensions, View, TouchableOpacity } from 'react-native';
import { Card, ButtonGroup, Icon } from 'react-native-elements';
import * as firebase from 'firebase';
import 'firebase/firestore';
import ProgramCard from '../components/ProgramCard';
  
const DATA = [
        { 
          id: 1, 
          program: 'One semester exchange', 
          country: 'Singapore', 
          mentor: 5, 
          type: 'exchange', 
          imageURI: 'http://coursera-university-assets.s3.amazonaws.com/f1/36da402d6911e8b6fe810dc60d0735/180x180px.png'
        },
        { 
          id: 2, 
          program: 'One semester exchange', 
          country: 'Asia or Europe', 
          mentor: 51, type: 'exchange', 
          imageURI: 'https://www.share-asean.eu/sites/default/files/sample-image-3_0.jpg' 
        },
        { 
          id: 3, 
          program: 'YSEALI Academic Fellowship', 
          country: 'United State', 
          mentor: 53, 
          type: 'exchange', 
          imageURI: 'https://asiafoundation.org/wp-content/uploads/2017/11/YSEALI.png' 
        },
        { 
          id: 4, 
          program: '2-week leadership program', 
          country: 'Vietnam', 
          mentor: 54, 
          type: 'exchange', 
          imageURI: 'https://pbs.twimg.com/profile_images/909869473485619202/qypcYRAi.jpg' 
        },
        { 
          id: 5, 
          program: '2-week cultural learning', 
          country: 'Japan', 
          mentor: 55, 
          type: 'exchange', 
          imageURI: 'data:image/jpeg;base64,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' 
        },
        { 
          id: 6, 
          program: '8-week internship', 
          country: 'South Korea', 
          mentor: 56, 
          type: 'exchange', 
          imageURI: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHOQrwxciRWg_5kCuNHz5QeaYYss0SpiWnxFwgDAyyLlV6fvn' 
        },
        { 
          id: 7, 
          program: 'One semester exchange', 
          country: 'United States', 
          mentor: 57, 
          type: 'exchange', 
          imageURI: 'https://pbs.twimg.com/profile_images/1108411131595501573/QkUhOgCY_400x400.png' 
        },
        { 
          id: 8, 
          program: 'One-week KAIST Camp', 
          country: 'South Korea', 
          mentor: 58, 
          type: 'exchange', 
          imageURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/KAIST_logo.svg/1200px-KAIST_logo.svg.png' 
        },
        { 
          id: 9, 
          program: 'scholarship', 
          country: 'Singapore', 
          mentor: 5, 
          type: 'scholarship', 
          imageURI: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f28261f0564880c9086a57ee87a68887&auto=format&fit=crop&w=500&q=60' 
        },
        { 
          id: 10, 
          program: 'scholarship', 
          country: 'Korea', 
          mentor: 51, 
          type: 'scholarship', 
          imageURI: 'https://images.unsplash.com/photo-1535576434247-e0f50b766399?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=232f6dbab45b3f3a6f97e638c27fded2&auto=format&fit=crop&w=500&q=60' 
        },
        { 
          id: 11, 
          program: 'scholarship', 
          country: 'Japan', 
          mentor: 53, 
          type: 'scholarship', 
          imageURI: 'https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7edfb9bc7d214dbf2c920723cb0ffce2&auto=format&fit=crop&w=500&q=60' 
        },
        { 
          id: 12, 
          program: 'scholarshipe', 
          country: 'Australia', 
          mentor: 54, 
          type: 'scholarship', 
          imageURI: 'https://images.unsplash.com/photo-1535546204504-586398ee6677?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7320b162b147a94d4c41377d9035e665&auto=format&fit=crop&w=500&q=60' 
        },
        { 
          id: 13, 
          program: 'scholarship', 
          country: 'United States', 
          mentor: 55, 
          type: 'scholarship', 
          imageURI: 'https://images.unsplash.com/photo-1535531298052-7457bcdae809?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f15acb2aedb30131bb287589399185a2&auto=format&fit=crop&w=500&q=60' 
        },
        { 
          id: 14, 
          program: 'competition', 
          country: 'Malaysia',
          mentor: 56, 
          type: 'competition', 
          imageURI: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebe64b284c0ccffbac6a0d7ce2c8d15a&auto=format&fit=crop&w=500&q=60' 
        },
        { 
          id: 15, 
          program: 'competition', 
          country: 'New Zealands', 
          mentor: 57, 
          type: 'competition', 
          imageURI: 'https://images.unsplash.com/photo-1535540707939-6b4813adb681?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce3177d04728f7d1811e342b47d1e391&auto=format&fit=crop&w=500&q=60' 
        },
        { 
          id: 16, 
          program: 'competition', 
          country: 'Canada', 
          mentor: 58, 
          type: 'competition', 
          imageURI: 'https://images.unsplash.com/photo-1535486509975-18366f9825df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea59f63a657824d02872bb907fe85e76&auto=format&fit=crop&w=500&q=60' 
        }
  ];
const programType = ['exchange', 'scholarship', 'competition']
const deviceWidth = Dimensions.get('window').width;
 
export default class HomeView extends React.Component {
  //Header
  static navigationOptions = {
    title: 'Opportunity',
    headerStyle:{
      backgroundColor:  'rgba(0,122,255,0.5)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  };
  
  componentWillMount(){
    var firebaseConfig = {     
      apiKey : " AIzaSyAE_EoZBl5Rd_iEWfrDdOU-kIYzS-Rw6SI " ,    
      authDomain : "serschborng-830c3.firebaseapp.com" , 
    databaseURL : "https://serschborng-830c3.firebaseio.com" ,     
    projectId : "serschborng-830c3" ,     
    storageBucket : "serschborng-830c3.appspot.com" ,     
    messagingSenderId : "793654958178 " ,     
    appId : " 1: 793654958178: web: 7c04a556def9d7cbda593b " ,     
    measurementId : " G-PPJYPGZQCG " }; 
    
    firebase.initializeApp(firebaseConfig);

    const firestore = firebase.firestore();
    firestore.collection("Program")
    .where("country", "==", "Singapore")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log(data); // array of cities objects
    });
    // firestore.collection('Program').get()
    // .then(snapshot => {
    //   snapshot
    //     .docs
    //     .forEach(doc => {
    //       console.log(JSON.parse(doc._document.data.toString()))
    //     });
    // });
  }

  constructor () {
    super()
    // this.navigation = this.props.navigation.navigate;
    this.state = {
      selectedIndex: 0, //Button Group index
      //Default Display: Exchange Program
      programList : DATA.filter((item) =>{
          return item.type === programType[0];
        })
    }

    this.updateIndex = this.updateIndex.bind(this)
  }

  //Update ButtonGroup Index 
  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
    this.state.programList = [];

      switch(selectedIndex){
        case 0:
          this.state.programList = DATA.filter((item) =>{
            return item.type === programType[0];
          })
          break;

        case 1:
          this.state.programList = DATA.filter((item) =>{
            return item.type === programType[1];
          })
          break;

        case 2:
            this.state.programList = DATA.filter((item) =>{
              return item.type === programType[2];
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
    return this.state.programList.map((item, index) => {
       return (
          <View key={item.id}>
             <ProgramCard navigation={navigation} programList={item}/>
          </View>
          )
    });
 }

  render () {
    // "this.props.navigation" only work in render() 
    // To use it in another function, we need to pass this as a parameter
    const navigation = this.props.navigation
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

      cardListStyle:{
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
     }
  })