import React from "react";
import Preloader from "./../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileinfo}>
      <div className={s.description_block}>
        <img className={s.ava} src={props.profile.photos.large} alt="" />
        <div className={s.name}>{props.profile.fullName}</div>
        <div className={s.aboutMe}>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default Profileinfo;
