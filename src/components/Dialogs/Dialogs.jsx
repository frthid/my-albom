import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

export default function Dialogs(props) {
    let state = props.dialogsPage; 

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messegesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange =(e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messegesElements}
                </div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} placeholder='Enter your message' value ={newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

