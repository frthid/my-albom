import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

export default function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messegesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messegesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    );
}

