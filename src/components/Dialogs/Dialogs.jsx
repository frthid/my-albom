import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

export default function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>Dimon</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to='/dialogs/2'>Nikita</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to='/dialogs/3'>Artem</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to='/dialogs/4'>Churka</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>I am hate niggers</div>
                <div className={classes.message}>I am too</div>
                <div className={classes.message}>Cool!</div>
            </div>
        </div>
    );
}

