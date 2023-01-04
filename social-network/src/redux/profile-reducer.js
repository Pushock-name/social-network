const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts : [
      {id: 1, message: 'Привеееет', likesCount: 1},
      {id: 2, message: 'Этой мой первый пост', likesCount: 5},
      {id: 3, message: 'Рад вам пачаны', likesCount: 4}
  ],
    newPostText: ''
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

export default profileReducer;