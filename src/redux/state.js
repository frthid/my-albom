const ADD_POST = 'ADD-POST'; 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 0 },
                { id: 2, message: 'I am chehenets', likesCount: 666 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimon' },
                { id: 2, name: 'Atrem' },
                { id: 3, name: 'Nikita' },
                { id: 4, name: 'Churka' },
                { id: 5, name: 'Nigger' }
            ],
            messages: [
                { id: 1, message: 'I hate niggers' },
                { id: 2, message: 'I am too' },
                { id: 3, message: 'Cool!' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 228
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

window.store = store;
export default store; 