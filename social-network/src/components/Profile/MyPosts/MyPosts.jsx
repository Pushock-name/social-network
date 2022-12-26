import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';



const MyPosts = (props) => {

  let postElements = props.state.posts
  .map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  let newPostText = props.state.newPostText

  let onPostChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }  

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

    return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} value={newPostText}>
            </textarea>
          </div>  
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>  
          {postElements}
        </div>  
      </div>   
    );
};

export default MyPosts;