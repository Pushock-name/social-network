import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';





const Dialogs = (props) => {


    


    let dialogsElements = props.state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);


    let messagesElements = props.state.messages
    .map(m => <Message message={m.message} id={m.id} />)

    
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements} 
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};


export default Dialogs;