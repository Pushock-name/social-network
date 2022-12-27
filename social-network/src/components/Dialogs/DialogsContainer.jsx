import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/dialogs-reducer';
import React from 'react';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

    let state = props.store.getState();


    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    

    return (
        <Dialogs 
        updateNewMessageBody={updateNewMessageBody}
        sendMessage={sendMessage}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages} 
        newMessageBody={state.dialogsPage.newMessageBody} />
    );    
};


export default DialogsContainer;