import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import React from 'react';



const Dialogs = (props) => {

    let dialogsElements = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);


    let messagesElements = props.messages
    .map(m => <Message message={m.message} id={m.id} />);

    let newMessageBody = props.newMessageBody;

    let onMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    let sendMessageClick = () => {
        props.sendMessage();
    }
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements} 
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    onChange={onMessageChange} 
                    value={newMessageBody}>
                </textarea>
                <button 
                    onClick={sendMessageClick}>
                    Send message
                </button>
            </div> 
        </div>
    );
};


export default Dialogs;