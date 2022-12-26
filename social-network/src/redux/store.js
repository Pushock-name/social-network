const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {

      profilePage : {
        posts : [
          {id: 1, message: 'Привеееет', likesCount: 1},
          {id: 2, message: 'Этой мой первый пост', likesCount: 5},
          {id: 3, message: 'Рад вам пачаны', likesCount: 4}
      ],
        newPostText: 'ньюпосттекст'
      },
    
      dialogsPage : {
        dialogs :  [
        {id: 1, name: 'Павел'},
        {id: 2, name: 'Владислав'},
        {id: 3, name: 'Борис'},
        {id: 4, name: 'Андрей'},
        {id: 5, name: 'Иван'},
        {id: 6, name: 'Дмитрий'},
        {id: 7, name: 'Полина'},
        {id: 8, name: 'Евгений'}
      ],
      
        messages : [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет писечка кисечка'}
      ],
        newMessageText: 'ньюмессажтекст'
      },

      sidebar: {
        
      }
    },

    _callSubscriber() {
      console.log('state is changed')
    },

    getState() {
      return this._state;
    },

    subscribe (observer) {
      this._callSubscriber = observer;
    },

    dispatch(action) { // action это объект например: {type: 'ADD-POST' и т.д.}
      if (action.type === ADD_POST) {
          let newPost = {
            id: 4, 
            message: this._state.profilePage.newPostText, 
            likesCount: 0
          };
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
          let newMessage = {
            id: 1, 
            message: this._state.dialogsPage.newMessageText
          };
          this._state.dialogsPage.messages.push(newMessage);
          this._state.dialogsPage.newMessageText = '';
          this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
          this._state.dialogsPage.newMessageText = action.newText;
          this._callSubscriber(this._state);
        }
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

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
};

export default store;
