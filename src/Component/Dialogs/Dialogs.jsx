import React from "react";
import Dialog from "./Dialog";
import s from "./Dialogs.module.css";
import Messages from "./Messages";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Kolayn" },
    { id: 2, name: "Dimych" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Valera" },
  ];
  let MessagesData = [
    {id: 1, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Necessitatibus, deserunt.",},
    {id: 2, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, sit sapiente doloremque eum voluptatem aliquid.",},
    {id: 3, message: "Lorem ipsum dolor sit amet." },
    {id: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",},
    {id: 5, message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi veniam quis aperiam quibusdam alias!",},
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <Dialog id={dialogsData[0].id} name={dialogsData[0].name} />
        <Dialog id={dialogsData[1].id} name={dialogsData[1].name} />
        <Dialog id={dialogsData[2].id} name={dialogsData[2].name} />
        <Dialog id={dialogsData[3].id} name={dialogsData[3].name} />
      </div>
      <div className={s.messages}>
        <Messages id={MessagesData[0].id} message={MessagesData[0].message} />
        <Messages id={MessagesData[1].id} message={MessagesData[1].message} />
        <Messages id={MessagesData[2].id} message={MessagesData[2].message} />
        <Messages id={MessagesData[3].id} message={MessagesData[3].message} />
        <Messages id={MessagesData[4].id} message={MessagesData[4].message} />
      </div>
    </div>
  );
};

export default Dialogs;
