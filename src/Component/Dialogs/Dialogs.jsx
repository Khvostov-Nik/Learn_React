import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Messages from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => {
    return <Dialog id={dialog.id} name={dialog.name} />;
  });

  let messagesElements = props.state.messages.map((message) => {
    return <Messages id={message.id} message={message.message} />;
  });
  let newMessageElement = React.createRef();

  let addMessage = ()=> {
    let text = newMessageElement.current.value;
    props.addMessage(text)
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div> {messagesElements}</div>
        <div>
          <textarea
            className={s.add_message__area}
            ref={newMessageElement}
          ></textarea>
          <button className={s.add_message} onClick={addMessage}>Add mesage</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
