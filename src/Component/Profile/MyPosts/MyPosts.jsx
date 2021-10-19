import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      <div className={s.add_post}>
        <div className={s.myPost_title}>my posts</div>
        <div>
          <textarea className={s.add_post__area}></textarea>

          <button className={s.add_post__btn}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi! how are you?" />
        <Post message="it's my first post" />
      </div>
    </div>
  );
};

export default MyPosts;
