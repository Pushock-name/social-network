const SEND_MESSAGE = 'SEND-MESSAGE';



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
  ]
};


const dialogsReducer = (state = initialState, action) => {

      switch(action.type) {
        case SEND_MESSAGE: 
          let body = action.newMessageBody
            return {
              ...state,
              messages : [...state.messages, {id: 6, message: body}],
          }  
        default: 
            return state;   
    }
  };


export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;