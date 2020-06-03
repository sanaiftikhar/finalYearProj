import React, { Component } from 'react';
import { View, Text , StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native';
// import { SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Fire from '../fire';
import * as ImagePicker from 'expo-image-picker';
import Newsfeed  from './NewsfeedScreen';

//import index from '../css';
// const firebase= require ('firebase');
// require("firebase/firestore");


export default class PostScreen extends Component {  
    state={
       text:"",
       image:null 
    }
    

    componentDidMount(){
        this.getPhotoPermission();
    }
    getPhotoPermission = async()=>{
        if(Constants.platform.ios){
            const {status}= await Persmissions.askAsync(Permissions.CAMERA_ROLL);
            if(status != "granted"){
                alert("We need PErmission to access your camera roll ")
            }
       
        }
    };
    pickImage = async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3]
        })
        console.log(result);
        if(!result.cancelled){
            this.setState({image: result.uri})
        }
    }
    handlePost=()=>{
       Fire.shared.addPost({text:this.state.text.trim(),localUri:this.state.image})
       .then (ref=>{
           this.setState({text:"",image:null})
          this.props.navigation.goBack();
       }).catch(error=>{
           alert(error);
           
       });
    };
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
        <Image source={require("./sana.jpg")} style={styles.avatar}></Image>
    <TextInput   autoFocus={true} 
    onChangeText={text=>this.setState({text})}
    value={this.state.text}
    multiline={true} numberOfLines={2} style={{flex:1}} placeholder="Write something here " placeholderTextColor="grey" ></TextInput>

    </View>
    <View style={{ flexDirection:"row", marginLeft:20, marginRight:20, justifyContent:"space-between"}}>
    <TouchableOpacity onPress={this.pickImage} style={{marginLeft:20}}>
    <Icon 
                  name='camera'
                  type='antdesign'
                  size={34}
                  color='yellowgreen'

                />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePost}>
            <Text style={{fontWeight:'500',  color:'white', backgroundColor:'yellowgreen', padding:8,}}>
                Post
            </Text>
        </TouchableOpacity>
        
    </View>
    <View style={{ marginTop:15,   alignItems:"center"}}>
            <Image source={{uri:  this.state.image}} style={{ backgroundColor:"lightblue", width:300, height:200}}>

            </Image>
        </View>
    

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

 

    
