import { Pagination } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "./../../img/avatar.png";
import s from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.user__wrap}>
      <Pagination
        className={s.pagination}
        count={pagesCount}
        variant="outlined"
        shape="rounded"
        size="medium"
        siblingCount={5}
        showFirstButton
        showLastButton
        onChange={(_, p) => {
          props.onPageChanged(p);
        }}
      />
      {props.users.map((u) => (
        <div key={u.id}>
          <NavLink to={"/Profile/" + u.id}>
            <img
              className={s.avatar}
              src={u.photos.small != null ? u.photos.small : userPhoto}
              alt=""
            />
          </NavLink>
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
