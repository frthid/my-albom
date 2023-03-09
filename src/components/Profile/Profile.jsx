import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const  Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://i.imgur.com/UehVKrn.png' alt=''/> 
            </div>
            <div>
            ava + info
            </div>
            <MyPosts />       
        </div>
    );
}

export default Profile;