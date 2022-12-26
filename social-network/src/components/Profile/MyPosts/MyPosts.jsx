import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store'



const MyPosts = (props) => {

  let postElements = props.state.posts
  .map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }  


    return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}></textarea>
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