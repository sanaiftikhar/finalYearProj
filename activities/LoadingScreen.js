import React, { Component } from 'react';
import { View, Text , ActivityIndicator} from 'react-native';
//import Fire from '../fire';
// import Fire from "../utils/fire";
//import index from '../css';
import * as firebase from 'firebase';

export default class LoadingScreen extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>
          {
            this.props.navigation.navigate(
              user ? 'App':'Auth');
          }
        )
    }
  render() {
    return (
      <View >
      {/* //style={index.Container}> */}
        <Text>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}