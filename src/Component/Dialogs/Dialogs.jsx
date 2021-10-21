import React from "react";
import Dialog from "./Dialog";
import s from "./Dialogs.module.css";
import Messages from "./Messages";

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Kolayn" },
    { id: 2, name: "Dimych" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Valera" },
  ];
 
  let messages = [
    {
      id: 1,
      message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Necessitatibus, deserunt.",
    },
    {
      id: 2,
      message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, sit sapiente doloremque eum voluptatem aliquid.",
    },
    { id: 3, message: "Lorem ipsum dolor sit amet." },
    {
      id: 4,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi veniam quis aperiam quibusdam alias!",
    },
  ];

  let dialogsElements = dialogs.map((dialog) => {
    return <Dialog id={dialog.id} name={dialog.name} />;
  });


  let messagesElements = messages.map((message) => {
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
