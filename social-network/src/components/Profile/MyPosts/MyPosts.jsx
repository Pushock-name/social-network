import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';




const MyPosts = (props) => {

  let postElements = props.posts
  .map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  let newPostText = props.newPostText;

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }  

  let addPostClick = () => {
    props.addPost();
  }

    return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea 
              ref={newPostElement} 
              onChange={onPostChange} 
              value={newPostText}>
            </textarea>
          </div>  
          <button 
            onClick={addPostClick}>
            Add post
          </button>
        </div>
        <div className={s.posts}>  
          {postElements}
        </div>  
      </div> 
    );
};

export default MyPosts;