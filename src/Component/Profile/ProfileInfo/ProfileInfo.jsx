import React from "react";
import userPhoto from "./../../../img/avatar.png";
import Preloader from "./../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";

const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileinfo}>
      <div className={s.description_block}>
        <img
          className={s.ava}
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
          alt=""
        />
        <div className={s.name}>{props.profile.fullName}</div>
        <div className={s.aboutMe}>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default Profileinfo;
