import { usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts : [
      {id: 1, message: 'Привеееет', likesCount: 1},
      {id: 2, message: 'Этой мой первый пост', likesCount: 5},
      {id: 3, message: 'Рад вам пачаны', likesCount: 4}
  ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
              id: 4, 
              message: state.newPostText, 
              likesCount: 0 
            }
              return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
              };
        case  UPDATE_NEW_POST_TEXT: 
              return {
                ...state,
              newPostText: action.newText
            }
        case  SET_USER_PROFILE: 
              return {...state, profile: action.profile}  
        default:
              return state        
    }
};


export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
};
  
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
};

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)   
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
  }



export default profileReducer;