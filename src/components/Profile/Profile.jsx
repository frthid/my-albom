import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

export default function Profile() {
    return (
        <div>
            <div>
                <img src='https://i.imgur.com/UehVKrn.png' alt='' />
            </div>
            <div>
                ava - info
            </div>
            <MyPosts />
        </div>
    );
}
