import React from 'react';
import classes from './ProfileInfo.module.css';

export default function ProfileInfo() {
    return (
        <div>
            <div>
                <img src='https://i.imgur.com/UehVKrn.png' alt='' />
            </div>
            <div className={classes.descriptionBlock}>
                ava - info
            </div>
        </div>
    );
}
