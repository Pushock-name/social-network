import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import { Element } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const textarea = Element('Textarea');

const AddNewPostForm = (props) => {
  return  <form onSubmit={props.handleSubmit}>
    <div>
      <Field name='newPostText' component={textarea} validate={[required, maxLength10]}/>
    </div>  
    <button> Add post</button>
  </form>
}


const AddNewPostReduxForm = reduxForm ({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)


const MyPosts = (props) => {

  let postElements = props.posts
  .map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  let addPost = (formData) => {
    props.addPost(formData.newPostText);
  }

    return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={addPost}/>
        <div className={s.posts}>  
          {postElements}
        </div>  
      </div> 
    );
};

export default MyPosts;