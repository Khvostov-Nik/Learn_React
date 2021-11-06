import React from "react";
import preloader from "./../../../img/preloader.svg";
import s from "./Preloader.module.css"

const Preloader = (props) => {
  return (
    <>
      <img className={s.preloader} src={preloader} alt="" />
    </>
  );
};

export default Preloader;
