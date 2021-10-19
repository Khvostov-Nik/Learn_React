import React from "react";
// import s from "./Profile.module.css";
import Myposts from "./MyPosts/MyPosts";
import Profileinfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <Profileinfo />
      <Myposts />
    </div>
  );
};

export default Profile;
