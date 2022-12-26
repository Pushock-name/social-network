import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/store'
import React from 'react';



const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);


    let messagesElements = props.state.messages
    .map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(addMessageActionCreator())
    }
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements} 
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div> 
        </div>
    );
};


export default Dialogs;