import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink className={s.dialog_link} activeClassName={s.active} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
