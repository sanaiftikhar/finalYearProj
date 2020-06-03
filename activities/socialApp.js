import React from 'react';
import ChatPage from './chat.js';
// import PostPage from './post.js';
import addPost from './addPost';
import listPost from './listPost';
import homePost from './HomeScreen';
import Newsfeed from './NewsfeedScreen';
import chat2 from './chat2'
import chat from './chat';
import Profile from './profile';
import {Ionicons} from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, TouchableOpacity, Animated, ActivityIndicator, FlatList } from 'react-native';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const TabScreen = createMaterialTopTabNavigator(
    {
        // Posts: { screen: PostPage ,
        //     navigationOptions: {
               
        //         tabBarIcon:({tintColor})=>   <Ionicons  name='ios-add-circle'
        //         size={29}
        //         color={tintColor}

        //       />   
    
        //     }
        // },
        CreatePost:{screen :addPost,
            navigationOptions: {
               
                        tabBarIcon:({tintColor})=>   <Ionicons  name='ios-add-circle'
                        size={29}
                        color={tintColor}
        
                      />   
            
                    }
                },
                listPost:{screen :listPost,
                    navigationOptions: {tabBarIcon:({tintColor})=>   <Ionicons  name='ios-list'
                    size={29}
                    color={tintColor}
           
                  />    }},
    //    Newsfeed: { screen: Newsfeed,
    //      navigationOptions: {tabBarIcon:({tintColor})=>   <Ionicons  name='ios-list'
    //      size={29}
    //      color={tintColor}

    //    />    }},
       Chat: {screen: chat,
        navigationOptions: { tabBarIcon:({tintColor})=>   <Ionicons  name='ios-notifications'
        size={29}
        color={tintColor}

      />   
          },
    },
    
    second: {screen: Profile,
        navigationOptions: { tabBarIcon:({tintColor})=>   <Ionicons  name='ios-person'
        size={29}
        color={tintColor}

      />   
          },
    },
    },
    {
        tabBarIcon:
            ({ tintColor }) => (
          <Icon name="users" size={30} color="#900" />
        )
        ,
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            showLabel:false,
            showIcon:true,
            activeTintColor: 'white',
            
            inactiveTintColor: '#D7DBDD',
            style: {
              backgroundColor:'purple'
            },
            indicatorStyle: {
                borderBottomColor: "white",
                borderBottomWidth: 3,
            },
        },
    }
);
const App = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            headerShown:false 
            // headerStyle: {
            //   backgroundColor: 'green',
            // },
            // headerTintColor: 'white',
            // title: 'CHARTS',
          }
    },
});
const SocialAppContainer = createAppContainer(App);
export default class SocialScreen extends React.Component {
    render() {
       return(
    //    <FirebaseProvider value={Firebase}>
 <SocialAppContainer />)
       {/* </FirebaseProvider>) */}
    }

}
