import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import OtherScreen from '../screens/OtherScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import MentorScreen from '../screens/MentorScreen';
import MentorProfileScreen from "../screens/MentorProfileScreen";
import SubscribeFormScreen from "../screens/SubscribeFormScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import FeedbackScreen from "../screens/FeedBackScreen";
import BecomeMentorScreen from "../screens/BecomeMentorScreen";

const HomeStack = createStackNavigator({

    HomeScreen: { 
      screen: HomeScreen,
      navigationOptions: {
        title: 'Opportunity',
        headerStyle:{
          backgroundColor:  'rgba(0,122,255,0.5)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      }},

    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'Detail',
        headerStyle:{
          backgroundColor:  'rgba(0,122,255,0.5)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      }},

    MentorScreen : {screen: MentorScreen},

    MentorProfileScreen: { 
      screen: MentorProfileScreen,      
      navigationOptions: {
        title: 'Mentor Profile',
        headerStyle:{
          backgroundColor:  'rgba(0,122,255,0.5)',
        },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    }},

    SubscribeFormScreen: { 
      screen: SubscribeFormScreen, 
      navigationOptions : {
        title: 'Subscription Form',
        headerStyle:{
          backgroundColor:  'rgba(0,122,255,0.5)',
        },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    }}
  },
  {
    initialRouteName: 'HomeScreen',
  });

const OtherStack = createStackNavigator({
  OtherScreen: { 
    screen: OtherScreen, 
    navigationOptions : {
      title: 'Others',
      headerStyle:{
        backgroundColor:  'rgba(0,122,255,0.5)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
  }},
  AboutUsScreen: { 
    screen: AboutUsScreen, 
    navigationOptions : {
      title: 'About Us',
      headerStyle:{
        backgroundColor:  'rgba(0,122,255,0.5)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
  }},
  BecomeMentorScreen: { 
    screen: BecomeMentorScreen, 
    navigationOptions : {
      title: 'Become a Mentor',
      headerStyle:{
        backgroundColor:  'rgba(0,122,255,0.5)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
  }},
  FeedbackScreen: {
    screen: FeedbackScreen, 
      navigationOptions : {
      title: 'Feedback',
      headerStyle:{
        backgroundColor:  'rgba(0,122,255,0.5)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    }}
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
    navigation.state.routes.map(route => {
      if (route.routeName === "SplashScreen") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });


  return {
    tabBarVisible
  };
};

const App = createAppContainer(
    createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons name='ios-home' size={25} color={tintColor}/>
        )
      })
    },

    Others: {
      screen: OtherStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons name='ios-menu' size={25}  color={tintColor}/>
        )
      })
    },
  },
  {

    initialRouteName: 'Home',
  }
));

export default App;