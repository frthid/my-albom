import React from 'react';
import classes from './../Dialogs.module.css'

export default function Message(props) {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}