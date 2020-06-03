import React from 'react';
import Charts from './ChartScreen.js';
import Main from './activities/chat.js';     
 import Loading from './activities/LoadingScreen'
import Social from './activities/socialApp.js';
import Register from './activities/RegisterScreen';
import Login from './activities/LoginScreen';
import News from './activities/news.js';
import Newsfeed from './activities/NewsfeedScreen';
import Chat from './activities/chat2';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, TouchableOpacity, Animated, ActivityIndicator, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import * as firebase from 'firebase';
//mport /
// var firebaseConfig =
// //FirebaseKeys;
// {
//   apiKey: "AIzaSyAwoGkPQEHv8Qyd20SEy9YFsos0ReVPsmM",
//   authDomain: "socialapp-3e549.firebaseapp.com",
//   databaseURL: "https://socialapp-3e549.firebaseio.com",
//   projectId: "socialapp-3e549",
//   storageBucket: "socialapp-3e549.appspot.com",
//   messagingSenderId: "485355468655",
//   appId: "1:485355468655:web:9dc1978f87f54598141a9a"
// };
// firebase.initializeApp(firebaseConfig);



//import { ScrollView } from 'react-native-gesture-handler';
class HomeScreen extends React.Component{
  // componentWillMount(){
  //   firebase.database().ref("users/1").set({
  //     name:"sana"
  // }).then() => {
  //     console.log("inserted");
  // }
  // }
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  signout=()=> {firebase.auth().signOut();}
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }  
    return (
      <SafeAreaView style={{ flex: 1, margin:20
   }}>

<Text >
          Hello, {this.state.displayName}
        </Text>


        <Button title="Charts" style={{padding:40}}
          onPress={() => this.props.navigation.navigate("Charts")} />
 
          <Button style={{padding:40}} title="News"
          onPress={() => this.props.navigation.navigate("News")} />
 
          <Button  style={{padding:90}} title="Social"
          onPress={() => this.props.navigation.navigate("Social")} />


<Button  style={{padding:90}} title="Logout"
         onPress={this.signout} />
         <Button  style={{padding:90}} title="Ct"
          onPress={() => this.props.navigation.navigate("Main")} />

      </SafeAreaView>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: 'white',
      title: 'W O R M',
    }
  },
  
  Charts: {
    screen: Charts
    //,
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: 'green',
    //   },
    //   headerTintColor: 'white',
    //   title: 'CHARTS',
    // }
  
  },
  News:{
    screen: News
  }, 
  Social:{
    screen: Social
  },
  Main:{
    screen:Main
  }, 

  //Chat:{screen : Chat}
 
});

const AuthStack=createStackNavigator({
  Login:{screen : Login , navigationOptions:{headerShown:false } },
  Register:{screen: Register, navigationOptions:{headerShown:false }},
},
//{
 // initialRouteName:"Register"
  // defaultNavigationOptions:{
  //   headerShown:false,
    
  // },
//}
);

export default createAppContainer(
createStackNavigator(
  {
Loading: Loading, 
 App:AppNavigator,
Auth:AuthStack

  },
  {
    initialRouteName:"Loading"
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    },
  }
  //  {
  //   navigationOptions: {
  //     header: null,
  //     tabBarVisible: false,         
  //   }
  // }
)

);

