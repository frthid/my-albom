import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts({ posts }) {

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