import React from 'react';
import './App.css';
import Header from './components/Header';

const  App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav> 
      <div className='content'>
        <div>
          <img src='https://i.imgur.com/UehVKrn.png' alt=''/> 
        </div>
        <div>
          ava + info
        </div>
        <div>
          my post
          <div>
            new post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;  
