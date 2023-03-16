import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts() {
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                New post
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi' likesCount='0' />
                <Post message='I am chehenets' likesCount='666' />
            </div>
        </div>
    );
}