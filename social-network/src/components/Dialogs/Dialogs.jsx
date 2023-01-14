import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';


const maxLength50 = maxLengthCreator(50)

const textarea = Element('Textarea');

const AddMessageForm = (props) => {
        return  <form className={s.messages} onSubmit={props.handleSubmit}>
                    <Field component={textarea} validate={[required, maxLength50]} name='newMessageBody'placeholder='Enter your message' />
                    <button>Send message</button>
                </form>
}

const AddMessageReduxForm = reduxForm ({form: 'dialogAddMessageForm'}) (AddMessageForm);


const Dialogs = (props) => {

    let dialogsElements = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);


    let messagesElements = props.messages
    .map(m => <Message message={m.message} id={m.id} />);


    let  addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody)
    };
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements} 
            </div>
            <div>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>    
            </div> 
        </div>
    );
};


export default Dialogs;