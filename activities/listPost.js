import React, { Component } from 'react';
import { View, Text,FlatList, StyleSheet, ScrollView} from 'react-native';
import PostComponent from './PostComponent';

import { db } from './config';

let itemsRef = db.ref('user1/posts');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    }
  })

export default class LitItem extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }
    renderItem({items}){
      return(
        <PostComponent items={items} />
      )
    }
    
    render() {
        return (
      //     <View style={styles.container}>
      //   <FlatList
      //     data={this.state.items}
      //     renderItem={this.renderItem}
      //    // keyExtractor={item => item.uid}
      //   />
      // </View>

          <ScrollView style={styles.scrollView}>
            <View style={{borderRadius:1, borderColor:"grey", justifyContent:"center"}}>
                {
                    this.state.items.length > 0
                    ? <PostComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
            </ScrollView>
        )
    }
}
// const styles = StyleSheet.create({

//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//   }

// });