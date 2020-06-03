import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import { View, Text, TouchableOpacity, StyleSheet , FlatList, Image} from 'react-native';
//import index from '../css';
// const post=[{
//   id:"1",
//   name:"sana",
//   text:"rfghjk rfgyhu rdtfgh rdtfygh rdtyfug rdtfyg",
//   timestamp:4,
//   avatar:require("./sana.jpg"),
//   image: require("./sana.jpg")
// },
// {
//   id:"2",
//   name:"sana",
//   text:"rfghjk rfgyhu rdtfgh rdtfygh rdtyfug rdtfyg",
//   timestamp:4,
//   avatar:require("./sana.jpg"),
//   image: require("./sana.jpg")
// },
// {
//   id:"3",
//   name:"sana",
//   text:"rfghjk rfgyhu rdtfgh rdtfygh rdtyfug rdtfyg",
//   timestamp:477,
//   avatar:require("./sana.jpg"),
//   image: require("./sana.jpg")
// }
// ];
export default class NewsfeedScreen extends Component {

    // state={
    //     email:"",
    //     displayname:""
    // };
    // componentDidMount(){
    //     const {email, displayname}=firebase.auth().currentUser;
    //     this.setState({email, displayname});
    // }
    // signout=()=> {firebase.auth().signout();}
    renderPost= (post) => {
      
      return(
        <View style={styles.feedItem}>
          <Image source={post.avatar} style={styles.avatar}/>
          <View style={{flex:1}}>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
      <View>
      <Text style={styles.name}>{post.name}</Text>
      <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
      </View>
      <Icon 
                  name='more-horizontal'
                  type='feather'
                  color='grey'
                  size={27}
                />
            </View>
            <Text style={styles.post}>{post.text}</Text>
            <Image style={styles.image} source={post.image}
            resizeMode="cover"/>
            <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={this.showAlert}> 
                <Icon reverse
                  name='heart'
                  type='antdesign'
                  color='purple'
                  size={24}
                />
                </TouchableOpacity>
                 {/* </Button> */}
                {/* </TouchableOpacity> */}
                <TouchableOpacity onPress={this.shareMessage}> 
                <Icon reverse
                  name='chat'
                  type='entypo'
                  color='pink'
                  size={24}

                />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.showAlert}> 
                <Icon reverse
                 name='sharealt'
                  type='antdesign'
                  color='yellowgreen'
                  size={24}
                />
                </TouchableOpacity>
          </View>  

          </View>
        
         
        </View>
        
      
      );
    };

  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.header}>
          {/* <Text style={styles.headertitle}> Feed</Text> */}
        </View>
        <FlatList style={styles.feed} data={post}
          renderItem={({item})=> this.renderPost(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false} />
         {/* <Text>Successfully regsitered</Text>
        <TouchableOpacity onPress={this.signout}>
             <text>Logout</text>
         </TouchableOpacity> */}
      </View>
    );
  }
}
const styles=StyleSheet.create({
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
    marginHorizontal:16
  }, 
  feedItem:{
    backgroundColor:"#FFF",
    borderRadius:5,
    padding:8,
    flexDirection:"row",
    marginVertical:8
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
})