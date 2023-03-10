import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New post
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi' likesCount='0' />
                <Post message='I am chehenets' likesCount='666' />
            </div>
        </div>
    );
}

export default MyPosts;