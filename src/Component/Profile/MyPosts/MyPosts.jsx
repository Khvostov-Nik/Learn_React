import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  

  let postsElements = props.posts.map((post) => {
    return (
      <Post id={post.id} message={post.message} likeCount={post.likeCount} />
      )
    });

  let newPostElement = React.createRef();
  let addPost = ()=> {
    let text = newPostElement.current.value;
    props.addPost(text)
  };

  return (
    <div>
      <div className={s.add_post}>
        <div className={s.myPost_title}>my posts</div>
        <div>
          <textarea className={s.add_post__area} ref={newPostElement}></textarea>
          <button className={s.add_post__btn} onClick={ addPost }>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
