import React from "react";
import s from "./Profile.module.css";
import Myposts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://c.wallhere.com/photos/1f/82/3840x1200_px_landscape_plains-662119.jpg!d"
          alt=""
        />
      </div>
      <div>ava + description</div>
     <Myposts/>
    </div>
  );
};

export default Profile;
