import React from 'react';
import classes from './../Dialogs.module.css'

export default function Message({ message }) {
    return (
        <div className={classes.message}>{message}</div>
    ); 
}