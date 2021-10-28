import React from "react";
// import s from "./Profile.module.css";
// import Myposts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer store={props.store}
        profilePage={props.profilePage}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
