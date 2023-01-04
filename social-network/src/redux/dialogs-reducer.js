const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

      switch(action.type) {
        case SEND_MESSAGE: 
          let newMessage = {
            id: 1, 
            message: state.newMessageBody
          }
            return {
              ...state,
              messages : [...state.messages, newMessage],
              newMessageBody : ''
          }  
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
              ...state,
              newMessageBody: action.body
            }  
        default: 
            return state;   
    }
  };


export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  }
};

export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
};

export default dialogsReducer;