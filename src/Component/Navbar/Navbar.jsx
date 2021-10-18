import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={s.nav__link} activeClassName={s.active} to="/Profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.nav__link} activeClassName={s.active} to="/Dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.nav__link} activeClassName={s.active} to="/News">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.nav__link} activeClassName={s.active} to="/Music">
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.nav__link} activeClassName={s.active} to="/Setting">
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
