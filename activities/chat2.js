// @flow
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

//import Fire from '../fire';
import { KeyboardAvoidingView, Platform } from 'react-native';

// const Props = {
//   name?: string,
// };

export default class Chat2 extends React.Component {
    state = {
        messages: [],
      };

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });



  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
      const chat=<GiftedChat
      messages={this.state.messages}
      onSend={Fire.shared.send}
      user={this.user}
    />
 
     if(Platform.Os==="android"){
        return (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding"
        keyboardVerticalOffset={30} enabled>
            {chat}
        </KeyboardAvoidingView>
      );
     }
     return <SafeAreaView style={{flex:1}}>{chat} </SafeAreaView>  
  }



  componentDidMount() {
    Fire.shared.get(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

