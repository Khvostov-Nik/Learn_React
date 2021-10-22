import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  

  let postsElements = props.posts.map((post) => {
    return (
      <Post message={post.message} likeCount={post.likeCount} />
      )
    });

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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
