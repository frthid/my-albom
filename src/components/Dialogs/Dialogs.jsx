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

function Message({message}) {
    return (
        <div className={classes.message}>{message}</div>
    );
}

export default function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                <DialogItem name='Dimon' id='1' />
                <DialogItem name='Atrem' id='2' />
                <DialogItem name='Nikita' id='3' />
                <DialogItem name='Churka' id='4' />
                <DialogItem name='Nigger' id='5' />
            </div>
            <div className={classes.messages}>
                <Message message='I hate niggers'/>
                <Message message='I am too'/>
                <Message message='Cool!'/>
            </div>
        </div>
    );
}

