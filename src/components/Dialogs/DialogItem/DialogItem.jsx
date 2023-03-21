import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css'

export default function DialogItem({ name, id }) {
    let path = '/dialogs/' + id;

    return (
        <div>
            <NavLink to={path} className={dialogItem => dialogItem.isActive ? classes.active : classes.dialog}>{name}</NavLink>
        </div>
    );
}
