import React, { Component } from 'react';
import {addPost} from './service';import * as firebase from 'firebase';
import {
  View,
  Text,SafeAreaView, TouchableOpacity, Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class adddPost extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        error: false,
        clear:'', 
          uid: ''



      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      this.setState({
        name: e.nativeEvent.text
        
      });
      
    }
    handleSubmit() {

      addPost(this.state.name);
     alert(
        'Posted successfully'
       );

       
    }
//   render() {
//     return (
//       <View style={styles.main}>
//         <Text style={styles.title}>Add Item</Text>
//         <TextInput
//               style={styles.itemInput}
//               onChange={this.handleChange}
//             />
//         <TouchableHighlight
//                 style = {styles.button}
//                 underlayColor= "white"
//                 onPress = {this.handleSubmit}
//               >
//               <Text
//                   style={styles.buttonText}>
//                   Add
//               </Text>
//             </TouchableHighlight>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     padding: 30,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     backgroundColor: '#2a8ab7'
//   },
//   title: {
//     marginBottom: 20,
//     fontSize: 25,
//     textAlign: 'center'
//   },
//   itemInput: {
//     height: 50,
//     padding: 4,
//     marginRight: 5,
//     fontSize: 23,
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 8,
//     color: 'white'
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#111',
//     alignSelf: 'center'
//   },
//   button: {
//     height: 45,
//     flexDirection: 'row',
//     backgroundColor:'white',
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     marginTop: 10,
//     alignSelf: 'stretch',
//     justifyContent: 'center'
//   }
// });







render() {
  return (
<SafeAreaView style={{flex:1}}>
  <View style={styles.header}>
      <TouchableOpacity>

      {/* <Icon reverse
                name='sharealt'
                type='antdesign'
                color='yellowgreen'

              /> */}

      </TouchableOpacity>
      {/* <TouchableOpacity>
          <Text style={{fontWeight:'500'}}>
              Post
          </Text>
      </TouchableOpacity> */}

  </View>
  <View style={styles.inputContainer}>
    
      {/* <Image source={require("./sana.jpg")} style={styles.avatar}></Image> */}
  <TextInput   autoFocus={true} 
  onChange={this.handleChange}
  // value={this.state.text}
  multiline={true} numberOfLines={2} style={{flex:1}} placeholder="Write something here " placeholderTextColor="grey" ></TextInput>

  </View>
  <View style={{ flexDirection:"row", marginLeft:20, marginRight:20, justifyContent:"space-between"}}>
  {/* <TouchableOpacity onPress={this.pickImage} style={{marginLeft:20}}>
  <Icon 
                name='camera'
                type='antdesign'
                size={34}
                color='yellowgreen'

              />
      </TouchableOpacity> */}
      <TouchableOpacity onPress={this.handleSubmit}>
          <Text style={{fontWeight:'500',  color:'white', backgroundColor:'#3f51b5', padding:8,}}>
              POST
          </Text>
      </TouchableOpacity>
      
  </View>
  {/* <View style={{ marginTop:15,   alignItems:"center"}}>
          <Image source={{uri:  this.state.image}} style={{ backgroundColor:"lightblue", width:300, height:200}}>

          </Image>
      </View> */}
  

</SafeAreaView>
  );
}
}
const styles= StyleSheet.create({
  // header:{
  //    height:80,
  //     flexDirection:'row',
  //     justifyContent:'space-between',
  //     paddingHorizontal:17, 
  //     paddingVertical:12,
  //     borderBottomColor:'grey',
  //     borderBottomWidth:1

  // },
  inputContainer:{
margin:10,
padding:10,
flexDirection:'row', borderColor:40, borderWidth:1, borderRadius:8
  },
  avatar:{
      width:50,
      height:50, borderRadius:25, marginRight:18, marginLeft:10
  }
})