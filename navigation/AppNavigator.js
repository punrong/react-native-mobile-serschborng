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
    HomeScreen: { screen: HomeScreen },
    DetailScreen: {screen: DetailScreen},
    MentorScreen : {screen: MentorScreen},
    MentorProfileScreen: { screen: MentorProfileScreen },
    SubscribeFormScreen: { screen: SubscribeFormScreen }
},
{
  initialRouteName: 'HomeScreen',
});

const OtherStack = createStackNavigator({
  OtherScreen: { screen: OtherScreen},
  AboutUsScreen: { screen: AboutUsScreen},
  BecomeMentorScreen: { screen: BecomeMentorScreen},
  FeedbackScreen: {screen: FeedbackScreen}
});

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
    // tabBarOptions: {
    //   activeTintColor: '#42f44b',
    //   inactiveTintColor: 'gray',
    // },
  }
));

export default App;