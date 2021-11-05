import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../img/avatar.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.user__wrap}>
      <div className={s.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? s.page + " " + s.active : s.page
              }
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <img
            className={s.avatar}
            src={u.photos.small != null ? u.photos.small : userPhoto}
            alt=""
          />
          <div className={s.userInfo}>
            <div className={s.user}>
              <div className={s.user_status}>{u.status}</div>
              <div className={s.user_name}>{u.name}</div>
            </div>
            <div>
              {u.followed ? (
                <button
                  className={s.btn}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={s.btn}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
