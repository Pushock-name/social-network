import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/dialogs-reducer';
import React from 'react';



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);


    let messagesElements = props.state.messages
    .map(m => <Message message={m.message} id={m.id} />);

    let newMessageBody = props.state.newMessageBody;


    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(text))
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements} 
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} value={newMessageBody}>
                </textarea>
                <button onClick={sendMessage}>Send message</button>
            </div> 
        </div>
    );
};


export default Dialogs;