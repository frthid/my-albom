import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts() {

    let posts = [
        { id: 1, message: 'Hi', likesCount: 0 },
        { id: 2, message: 'I am chehenets', likesCount: 666 }
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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
                {postsElements}
            </div>
        </div>
    );
}