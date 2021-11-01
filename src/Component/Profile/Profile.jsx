import React from "react";
// import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
