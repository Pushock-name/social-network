import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }  

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

    return (
     <MyPosts updateNewPostText={updateNewPostText}
      addPost={addPost} 
      posts={state.profilePage.posts} 
      newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;