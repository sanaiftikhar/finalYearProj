import React, { Component } from 'react';
import { View, Text, TextInput,StyleSheet, TouchableOpacity , Image, LayoutAnimation} from 'react-native';
import   firebase from 'firebase';
//import index from '../css';

export default class LoginScreen extends Component {
  static navigationOptions={
    headerShown:false
  }
    state={
        email:"",
        password:"", 
        errorMessage:null
    }
    handleLogin =()=>{
        const{email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error=> this.setState({errorMessage:error.message}));
    }
  render() {
    LayoutAnimation.easeInEaseOut(); 
    return (
      <View style={{ margin:20,  borderRadius:4, borderWidth:1.5, padding:10}}>
           {/* <Image source={require('./sana.jpg')} style={styles.avatar}/> */}
           <View >
                    {this.state.errorMessage && <Text style={{color:"red"}} > {this.state.errorMessage}</Text>}
                </View>
          <View>
          <Text>Email Address</Text>
              <TextInput autoCapitalize="none"
              onChangeText={email => this.setState({email})}
              value = {this.state.email}
              style={{borderWidth:1,padding:4,borderColor:'lightblue', borderRadius:4}} ></TextInput>
 
          </View>
          <View>
          <Text>Password</Text>
              <TextInput
              autoCapitalize="none" 
              secureTextEntry
              onChangeText={password => this.setState({password})}
              value = {this.state.password}
              style={{borderWidth:1,padding:4,borderColor:'lightblue', borderRadius:4}}  ></TextInput>
          
          </View>
          <TouchableOpacity onPress={this.handleLogin}>
            <Text style={{backgroundColor:'green', color:'white', textAlign:'center'}}>
                Sign In</Text>
          </TouchableOpacity>
          {/* <Button  style={{padding:90}} title="Register"
          onPress={() => this.props.navigation.navigate("Register")} /> */}
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Register")}>
          <Text style={{color:"blue"}}>Dont have an account ? Sign Up</Text>
          </TouchableOpacity>
          
      </View>
    );
  }
}
const styles=StyleSheet.create({

avatar:{
  width:50,alignSelf:"center", justifyContent:"center",
      height:50, borderRadius:25, marginRight:18, marginLeft:10
}
})