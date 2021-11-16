import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <a href="/Profile">
        <img
          className={s.logo}
          src="https://i.pinimg.com/originals/0f/41/d0/0f41d0404ae75869088e7c150affab84.png"
          alt=""
        />
      </a>
      <div className={s.login__block}>
        {props.isAuth ? <NavLink className={s.login__link} to={"/login"}>{props.login}</NavLink> : <NavLink className={s.login__link} to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
