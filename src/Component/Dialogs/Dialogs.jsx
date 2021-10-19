import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog + ' '+ s.active}>Kolayn</div>
        <div className={s.dialog}>Dimych</div>
        <div className={s.dialog}>Ivan</div>
        <div className={s.dialog}>Valera</div>
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
