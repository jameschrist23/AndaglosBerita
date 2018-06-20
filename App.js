import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
    )
  }
}

export default App;

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'News'
      }
    },
    Details: {
      screen: DetailScreen,
      navigationOptions: {
        headerTitle: 'Details'
      }
    }
  }
)