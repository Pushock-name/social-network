import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';



const MyPosts = (props) => {

  let postElements = props.state.posts
  .map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    text = '';
  }

    return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
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