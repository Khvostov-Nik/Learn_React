import React from "react";
// import { addPostAction, updateNewPostTextAction } from "./../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((post) => {
    return (
      <Post postsId={post.postsId} message={post.message} likeCount={post.likeCount} />
    );
  });


  let addPost = () => {
   props.addPost()
  };

  let onPostChang = (e) => {
    let text = e.target.value; 
    props.onPostChang(text)
  };

  return (
    <div>
      <div className={s.add_post}>
        <div className={s.myPost_title}>my posts</div>
        <div>
          <textarea
            className={s.add_post__area}
            onChange={onPostChang}
            value={props.profilePage.newPostText}
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
