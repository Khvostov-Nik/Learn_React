import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog }>
          <NavLink className={s.dialog_link} activeClassName={s.active} to="/dialogs/id/1">Kolayn</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink className={s.dialog_link} activeClassName={s.active} to="/dialogs/id/2">Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink className={s.dialog_link} activeClassName={s.active} to="/dialogs/id/3">Ivan</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink className={s.dialog_link} activeClassName={s.active} to="/dialogs/id/4">Valera</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, deserunt.
        </div>
        <div className={s.message}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, deserunt.
        </div>
        <div className={s.message}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, deserunt.
        </div>
        <div className={s.message}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, deserunt.
        </div>
        <div className={s.message}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, deserunt.
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
