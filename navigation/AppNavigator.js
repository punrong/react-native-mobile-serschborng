import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen';
import MentorScreen from '../screens/MentorScreen'
import MentorProfileScreen from "../screens/MentorProfileScreen";
import SubscribeFormScreen from "../screens/SubscribeFormScreen";

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    DetailScreen: {screen: DetailScreen},
    MentorScreen : {screen: MentorScreen},
    MentorProfileScreen: { screen: MentorProfileScreen },
    SubscribeFormScreen: { screen: SubscribeFormScreen }
},
{
  initialRouteName: 'HomeScreen',
});

const App = createAppContainer(AppNavigator);

export default App;