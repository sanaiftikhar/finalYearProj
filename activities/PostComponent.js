import React, { Component } from 'react';
import {  View, Text, StyleSheet, FlatList,Image, SafeAreaView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Icon} from 'react-native-elements';
import { likePost } from './service';
import * as firebase from 'firebase';

const styles = StyleSheet.create({
    container:{
        flex:1, 
       backgroundColor:"#EFECF4"
      }, 
      image:{
        width:undefined,
        height:150, 
        marginTop:10
      },
      header:{
        paddingTop:29,
        paddingBottom:16, 
        backgroundColor:'#FFF',
        borderBottomColor:"#EBECF4",
        borderBottomWidth:1,
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"#454D65",
        shadowOffset:{height:5},
        shadowRadius:15,
        shadowOpacity:0.2,
        zIndex:10
      }, 
      headertitle:{
        fontSize:20,
        fontWeight: "500"
      },
      feed:{
        marginHorizontal:16,
 
      }, 
      feedItem:{
        backgroundColor:"#FFF",
        borderRadius:5,
        padding:8,
        flexDirection:"row",
        marginVertical:8,

      },
      avatar:{
        width:50,
            height:50, borderRadius:25, marginRight:18, marginLeft:10
      },
      name:{
        fontSize:15,
        fontWeight:"500",
        color:"#454D65"
      },
      timestamp:{
        fontSize:11,
        color:"#C4C6CE",
        marginTop:4,
    
      },post:{
        color:"grey"
        
      }
    });
export default class ItemComponent extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  static propTypes = {
      items: PropTypes.array.isRequired
  };
  handleLikePost = () => {
    likePost("liked");
    
   alert(
      'This post has been added to your liked lists'
    )
  }

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }  
    return (
      <SafeAreaView >
        {this.props.items.map((item, index) => {
            return ( 

                <View style={styles.feedItem}>
               {/* <Image source={require("./sana.jpg")} style={styles.avatar}/> */}
               <View style={{flex:1}}>
               <View  style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
      <View>
            <Text style={styles.name} >{this.state.displayName}</Text>
      {/* <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text> */}
      </View>
            </View>
            <View key={index}  style={{width:280} }>
            <Text style={styles.post}>{item.name}</Text>
            </View>


            </View>
            {/* <View key={index} >
            <Text>{item.name}</Text>
            </View> */}
               





                    <View style={{flexDirection:"row", marginTop:60}}>
                        <TouchableOpacity onPress={this.handleLikePost}> 
                                <Icon reverse
                                name='heart'
                                type='antdesign'
                                color='purple'
                                size={22}
                                />
                                </TouchableOpacity>
                                {/* <TouchableOpacity onPress={this.shareMessage}> 
                                <Icon reverse
                                name='chat'
                                type='entypo'
                                color='#3f51b5'
                                size={22}

                                />
                                </TouchableOpacity> */}
                                <TouchableOpacity onPress={this.showAlert}> 
                                <Icon reverse
                                name='sharealt'
                                type='antdesign'
                                color='purple'
                                size={22}
                                />
                                </TouchableOpacity>
                        </View>  
                 
                </View>
            )
        })}
      </SafeAreaView>
    );
  }
}
                // <FlatList  
                
                // />
                // <View style={{borderColor:"black" }}>
                //     <FlatList 
                //     data={index}
                //     renderItem="Sana"
                //     />