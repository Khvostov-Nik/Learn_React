import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Messages from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogPage.dialogs.map((dialog) => {
    return <Dialog id={dialog.id} name={dialog.name} />;
  });

  let messagesElements = props.dialogPage.messages.map((message) => {
    return <Messages id={message.id} message={message.message} />;
  });

  let newMessageElement = React.createRef();

  let addMessage = ()=> {
    props.addMessage();
  };

  let onMessageChang = ()=>{
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.addMessage__wrap}>
          <textarea className={s.add_message__area} onChange={onMessageChang} value={props.dialogPage.newMessageText} ref={newMessageElement} placeholder="Текст нового" />
          <button className={s.add_message} onClick={addMessage}>Add mesage</button>
        </div>
        <div> {messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
