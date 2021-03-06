import React, { useEffect, useRef } from "react";
import Dialog from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Messages from "./Message/Message";

const Dialogs = (props) => {

  let scrollRef = useRef(null);

  let dialogsElements = props.dialogPage.dialogs.map((dialog) => {
    return <Dialog userId={dialog.id} name={dialog.name} key={dialog.id} />;
  });

  let messagesElements = props.dialogPage.messages.map((message) => (
    <div ref={scrollRef}>
        <Messages
          messageId={message.id}
          message={message.message}
          key={message.id}
        />
      </div>
  ));

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"} )
  }, [messagesElements]);

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChang = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages__wrap}>
        <div className={s.mesages}> {messagesElements}</div>
        <div className={s.addMessage__wrap}>
          <textarea
            className={s.add_message__area}
            onChange={onMessageChang}
            value={props.dialogPage.newMessageText}
            placeholder=" Текст нового"
          />
          <button type="btn" className={s.add_message__btn} onClick={addMessage}>
            Add mesage
          </button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
