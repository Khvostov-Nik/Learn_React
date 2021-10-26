import React from "react";
import s from "./ProfileInfo.module.css";
const Profileinfo = () => {
  return (
    <div className={s.profileinfo}>
      <img
        className={s.img_profile}
        src="https://c.wallhere.com/photos/1f/82/3840x1200_px_landscape_plains-662119.jpg!d"
        alt=""
      />
      <div className={s.description_block}>ava + description</div>
    </div>
  );
};

export default Profileinfo;
