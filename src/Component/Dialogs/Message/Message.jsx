import React from "react";
import s from "./Message.module.css";

const Messages = (props) => {
  return (
    <div className={s.message}>{props.messageId}<span>) </span> {props.message}</div>
  );
};

export default Messages;
