import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return (
      <Post
        postId={post.id}
        message={post.message}
        likeCount={post.likeCount}
        key = {post.id}
      />
    );
  });

  let addPost = () => {
    props.addPost();
  };

  let onPostChang = (e) => {
    let text = e.target.value;
    props.onPostChang(text);
  };

  return (
    <div>
      <div className={s.add_post}>
        <div className={s.myPost_title}>my posts</div>
        <div>
          <textarea
            className={s.add_post__area}
            onChange={onPostChang}
            value={props.newPostText}
            placeholder="Текст нового поста"
          />
          <button className={s.add_post__btn} onClick={addPost}>
            Add Post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
