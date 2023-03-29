const ADD_POST = 'ADD-POST'; 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
            ],
            newMessageText: ''
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
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        } else if  (action.type === SEND_MESSAGE) {
            let newMessage = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push({ id: 4, message: newMessage })
            this._callSubscriber(this._state);
        }
    }
};
//POST
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
//MESSAGE
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    };
};

window.store = store;
export default store; 