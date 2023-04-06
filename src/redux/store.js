import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store; 