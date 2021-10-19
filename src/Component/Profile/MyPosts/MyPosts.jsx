import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let myPosts = [
    { id: 1, message: "Lorem ipsum dolor sit amet consectetur." , likeCount :'12'},
    { id: 2, message: "Lorem ipsum dolor sit." , likeCount:'3'},
  ];
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
        <Post message={myPosts[0].message} likeCount={myPosts[0].likeCount} />
        <Post message={myPosts[1].message} likeCount={myPosts[1].likeCount} />
      </div>
    </div>
  );
};

export default MyPosts;
