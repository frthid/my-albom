import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

export default function DialogsContainer(props) {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    };

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    };

    return (
        <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
    );
}

