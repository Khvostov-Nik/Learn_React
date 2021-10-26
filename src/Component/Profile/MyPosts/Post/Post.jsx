import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src="https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"
        alt=""
      />
        {props.postsId}<span>) </span>
        {props.message}
      <div>
        <span>Like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
