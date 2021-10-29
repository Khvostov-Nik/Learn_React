import React from "react";
import {
  addMessageAction,
  updateNewMessageTextAction
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageAction());
  };

  let onMessageChang = (text) => {
    props.store.dispatch(updateNewMessageTextAction(text));
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChang={onMessageChang}
      dialogs={state.dialogPage.dialogs}
      messages={state.dialogPage.messages}
      newMessageText={state.dialogPage.newMessageText}
    />
  );
};

export default DialogsContainer;
