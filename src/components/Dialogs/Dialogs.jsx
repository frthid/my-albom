import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

export default function Dialogs({ state }) {
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messegesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messegesElements}
            </div>
        </div>
    );
}

