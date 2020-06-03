import { db } from './config';

export const saveChart=(post)=>{
    db.ref('user1/savechart').push({
name:post
    })
}

export const addPost =  (post) => {
    db.ref('user1/posts').push({
        name: post
    });
}
export const likePost =  (post) => {
    db.ref('user1/likedPosts').push({
        name: post
    });
}

export const updateBio=(bio)=>{
   db.ref('user1/updateBio').update({
        bio
    });
}