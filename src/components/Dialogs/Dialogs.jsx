import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

function DialogItem({ name, id }) {
    let path = '/dialogs/' + id;

    return (
        <div>
            <NavLink to={path} className={dialogItem => dialogItem.isActive ? classes.active : classes.dialog}>{name}</NavLink>
        </div>
    );
}

function Message({ message }) {
    return (
        <div className={classes.message}>{message}</div>
    );
}

export default function Dialogs(props) {

    let dialogs = [
        { id: 1, name: 'Dimon' },
        { id: 2, name: 'Atrem' },
        { id: 3, name: 'Nikita' },
        { id: 4, name: 'Churka' },
        { id: 5, name: 'Nigger' }
    ];

    let messages = [
        { id: 1, message: 'I hate niggers' },
        { id: 2, message: 'I am too' },
        { id: 3, message: 'Cool!' }
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messegesElements = messages.map(m => <Message message={m.message} id={m.id} />);

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

