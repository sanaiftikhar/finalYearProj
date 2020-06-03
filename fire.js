// //import FirebaseKeys from './activities/config';
// import   firebase  from "firebase";
// import { YellowBox } from 'react-native';
// import _ from 'lodash';

// YellowBox.ignoreWarnings(['Setting a timer']);
// const _console = _.clone(console);
// console.warn = message => {
//   if (message.indexOf('Setting a timer') <= -1) {
//     _console.warn(message);
//   }
// };




// // 





// // const Firebase = {
// //     //...
// //     uploadPost: post => {
// //         const id = uuid.v4()
// //         const uploadData = {
// //         id: id,
// //         postPhoto: post.photo,
// //         postTitle: post.title
// //         }
// //         return fire_base
// //         .firestore()
// //         .collection('posts')
// //         .doc(id)
// //         .set(uploadData)
// //         },
// //         getPosts: () => {
// //             return firebase
// //               .firestore()
// //               .collection('posts')
// //               .get()
// //               .then(function(querySnapshot) {
// //                 let posts = querySnapshot.docs.map(doc => doc.data())
// //                 // console.log(posts)
// //                 return posts
// //               })
// //               .catch(function(error) {
// //                 console.log('Error getting documents: ', error)
// //               })
// //           }

// //   }
  
// // export default Firebase




// class Fire{
//      constructor(){
//        //firebase.initializeApp(FirebaseKeys)
//      }
//     //  addPost= async({
//     //     firebase.database().ref()

//     //  })
//      addPost= async({text, localUri})=>{
//         const remoteUri = await this.uploadPhotoAsync(localUri)
//          return new Promise((res, rej)=>{
//             firebase.firestore().collection("posts").add({
//                  text, 
//                  uid:this.uid,
//                  timestamp:this.timestamp,
//                 image:remoteUri
//              }).then(ref=>{
//                  res(ref)
//              })
//              .catch(error=>{
//                  console.log("there is prob;lem")
//                  rej(error);
//              })
//          })
//      }
//     // uploadPhotoAsync = async (uri
//     //     , imageName
//     //     ) => {
//     //     const response = await fetch(uri);
//     //     const blob = response.blob();
    
//     //     const ref = firebase.storage().ref().child("my-image");
//     //     return ref.put(blob);
//     // }
    
//     uploadPhotoAsync=async uri=>{
        
//         //const  path='posts/' +this.uid + '/' + Date.now()+'.jpg'
//         //grave_accents 
//         const  path=`posts/${this.uid}/${Date.now()}.jpg`
//                 return new Promise(async(res, rej)=>{
//             const response = await fetch(uri)
//             const file= await response.blob()

//             let upload = firebase.storage().ref(path).put(file);

//             upload.on("state_changed", snapshot=>{}, err=>{
//                 rej(err)
//             },
//             async()=>{
//                 const url= await upload.snapshot.ref.getDownloadURL();
//                 res(url);
//             }
//             )
//         })
//     }
//     get firestore(){
//         return firebase.firestore()
//     }
//     get uid(){
//         return (firebase.auth().currentUser ||{}).uid
//     }s
//     get timestamp(){
//         return Date.now()

//     }
// }
// Fire.shared = new Fire()
// export default Fire;
