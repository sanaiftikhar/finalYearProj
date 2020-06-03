import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import * as firebase from 'firebase';
import { ThemeConsumer } from 'react-native-elements';
import { Icon } from 'react-native-elements';
//import index from '../css';
import * as ImagePicker from 'expo-image-picker';
import UserPermissions from '../utilities/UserPermission';

export default class RegisterScreen extends Component {
    state = {
        user:{
            name: "",
            email: "",
            password: "",
            avatar:null
        },
        errorMessage: null
    };
    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));

    }
    handlePickAvatar =async () =>{
        UserPermissions.getCameraPermission()
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3]
        })
        console.log(result);
        if(!result.cancelled){
            this.setState({user: {...this.state.user, avatar: result.uri}});
        }
    }

    render() {
        return (
            <View style={{ margin: 20, borderRadius: 4, borderWidth: 1.5, padding: 10 }}>
                <TouchableOpacity style={styles.avatarholder} onPress={this.handlePickAvatar}>
                    <Image source={{uri:this.state.user.avatar}} style={styles.avatar}/>
                
                </TouchableOpacity>
                <Text>Sign Up to get started</Text>
                
                <View>
                    {this.state.errorMessage && <Text > {this.state.errorMessage}</Text>}
                </View>
                <View>


                    <Text>Full name</Text>
                    <TextInput
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                        autoCapitalize="none" style={{ borderWidth: 1, padding: 4, borderColor: 'lightblue', borderRadius: 4 }} ></TextInput>

                </View>
                <View>

                    <Text>Email Address</Text>
                    <TextInput
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        autoCapitalize="none"
                        style={{ borderWidth: 1, padding: 4, borderColor: 'lightblue', borderRadius: 4 }} ></TextInput>

                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput autoCapitalize="none" secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        style={{ borderWidth: 1, padding: 4, borderColor: 'lightblue', borderRadius: 4 }}  ></TextInput>

                </View>
                <TouchableOpacity onPress={this.handleSignUp}>
                    <Text style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>
                        Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity   onPress={()=> this.props.navigation.navigate("Login")}>
                    <Text>Sign In</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles=StyleSheet.create({
    avatar:{
        width:60,
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:"grey",
            height:60, borderRadius:25, 
      }
});