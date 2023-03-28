import React from 'react';
import classes from './Post.module.css';

export default function Post (props) {
    return (
        <div className={classes.item}>
            <img src='https://chudo-prirody.com/uploads/posts/2021-08/1628620240_143-p-foto-kotyat-152.jpg' alt='' />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

