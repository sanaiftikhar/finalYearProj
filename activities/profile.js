import React, { Component } from 'react';
import { View,StyleSheet, Image, Text, Button , TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { updateBio } from './service';import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import { TextInput } from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      error: false,
      clear:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      bio: e.nativeEvent.text
    });
  }
  handleSubmit() {
    updateBio(this.state.bio);
   alert(
      'Posted successfully'
     );

     
  }
  render() {
    return (
      <View  style={{ backgroundColor: 'ligghtgrey', color:"white" , flex:1}}>
   

    
        <Image source={require("./sana.jpg")} style={styles.avatar}></Image>
        <Text style={{fontWeight:"bold" ,marginTop:10, color:"black", fontSize:27, alignSelf:"center"}}>Bio</Text>
      <TextInput   onChange={this.handleChange}   multiline={true} value={this.state.bio} style={{  margin:10, backgroundColor:"white",borderWidth:1, borderRadius:20,  alignSelf:"center", textAlign:"center",width:300}} placeholderTextColor="white"></TextInput>
     

     <TouchableOpacity style={{alignSelf:"center"}} onPress={this.handleSubmit}><Text style={{color:"white" ,marginTop:7, backgroundColor:"green" ,padding:5}}>Update</Text></TouchableOpacity>
     {/* <TextInput   onChange={this.handleChange}
  // // value={this.state.text}
  // style={{flex:1, paddingLeft:20}}
   placeholder="Update" placeholderTextColor="black"></TextInput> */}

      </View>
    )
  }
}
const styles=StyleSheet.create({
avatar:{
  width:200,
  height:200, marginTop:20,borderRadius:100, alignContent:"center", alignSelf:"center"
}
});


