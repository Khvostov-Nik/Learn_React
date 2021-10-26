import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((post) => {
    return (
      <Post id={post.id} message={post.message} likeCount={post.likeCount} />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
  };

  let onPostChang = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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
            ref={newPostElement}
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
