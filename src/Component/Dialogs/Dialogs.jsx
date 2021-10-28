import React from "react";
import { addMessageAction, updateNewMessageTextAction } from "./../../redux/dialogsReducer";
import Dialog from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Messages from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogPage.dialogs.map((dialog) => {
    return <Dialog userId={dialog.userId} name={dialog.name} />;
  });

  let messagesElements = props.dialogPage.messages.map((message) => {
    return <Messages messageId={message.messageId} message={message.message} />;
  });


  let addMessage = () => {
    props.dispatch(addMessageAction());
  };

  let onMessageChang = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextAction(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.addMessage__wrap}>
          <textarea
            className={s.add_message__area}
            onChange={onMessageChang}
            value={props.dialogPage.newMessageText}
            placeholder="Текст нового"
          />
          <button type='btn' className={s.add_message} onClick={addMessage}>
            Add mesage
          </button>
        </div>
        <div> {messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
