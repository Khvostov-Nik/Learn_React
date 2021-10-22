import React from "react";
// import s from "./Profile.module.css";
import Myposts from "./MyPosts/MyPosts";
import Profileinfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <Profileinfo  />
      <Myposts posts={props.state.posts}/>
    </div>
  );
};

export default Profile;
