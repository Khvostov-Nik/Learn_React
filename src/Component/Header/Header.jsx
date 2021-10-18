import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <a href="/Profile">
        <img
          className={s.logo}
          src="https://i.pinimg.com/originals/0f/41/d0/0f41d0404ae75869088e7c150affab84.png"
          alt=""
        />
      </a>
    </header>
  );
};

export default Header;
