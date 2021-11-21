import { Pagination } from "@mui/material";
import axios from "axios";
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
        siblingCount={6}
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
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers:{
                            "API-KEY": "f7c74fa8-78d2-415f-8e71-1b506f4aee99"
                          }
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={s.btn}
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers:{
                            "API-KEY": "f7c74fa8-78d2-415f-8e71-1b506f4aee99"
                          }
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
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
