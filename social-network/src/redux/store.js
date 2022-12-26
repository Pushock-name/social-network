import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {

      profilePage : {
        posts : [
          {id: 1, message: 'Привеееет', likesCount: 1},
          {id: 2, message: 'Этой мой первый пост', likesCount: 5},
          {id: 3, message: 'Рад вам пачаны', likesCount: 4}
      ],
        newPostText: ''
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
        newMessageBody: ''
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

    dispatch(action) { 

      this._state.profilePage = profileReducer(this._state.profilePage, action);

      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
    }
};


export default store;
