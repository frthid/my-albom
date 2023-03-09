import React from 'react';
import classes from './Profile.module.css';

const  Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://i.imgur.com/UehVKrn.png' alt=''/> 
            </div>
            <div>
            ava + info
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default Profile;