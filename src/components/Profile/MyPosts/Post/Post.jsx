import React from 'react';
import classes from './Post.module.css';

export default function Post ({ message, likesCount}) {
    return (
        <div className={classes.item}>
            <img src='https://chudo-prirody.com/uploads/posts/2021-08/1628620240_143-p-foto-kotyat-152.jpg' alt='' />
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    );
}

