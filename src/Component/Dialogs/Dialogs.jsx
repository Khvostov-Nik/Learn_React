import React from "react";
import Dialog from "./Dialog";
import s from "./Dialogs.module.css";
import Messages from "./Messages";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <Dialog name="Kolayn" id="1" />
        <Dialog name="Dimych" id="2" />
        <Dialog name="Ivan" id="3" />
        <Dialog name="Valera" id="4" />
      </div>
      <div className={s.messages}>
        <Messages message="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, deserunt." />
        <Messages message="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, deserunt." />
        <Messages message="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, deserunt." />
        <Messages message="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, deserunt." />
        <Messages message="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, deserunt." />
        </div>
    </div>
  );
};

export default Dialogs;
