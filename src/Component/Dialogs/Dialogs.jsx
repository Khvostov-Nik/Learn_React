import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Messages from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((dialog) => {
    return <Dialog id={dialog.id} name={dialog.name} />;
  });

  let messagesElements = props.state.messages.map((message) => {
    return (
    <Messages id={message.id} message={message.message} />
    )
  });
  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
