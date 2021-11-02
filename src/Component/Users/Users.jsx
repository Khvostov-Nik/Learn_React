import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://img.ltwebstatic.com/images3_pi/2021/06/02/1622617038df9d8f149669e5aa70027c7ab0cf5ea9.jpg",
        followed: true,
        fullName: "Nikolay",
        status: "earn and spend ",
        location: { country: "Russia", city: "Kirishi" },
      },
      {
        id: 2,
        photoUrl:
          "https://yt3.ggpht.com/ytc/AAUvwnh_YjSjUyud8lrIBDZL0E3CnZ_FlDk7T4zD4__3ZQ=s900-c-k-c0x00ffffff-no-rj",
        followed: false,
        fullName: "Nik",
        status: "bla bla",
        location: { country: "Russia", city: "Moscov" },
      },
      {
        id: 3,
        photoUrl: "https://klike.net/uploads/posts/2018-06/1528369868_15.jpg",
        followed: true,
        fullName: "Aleks",
        status: "up up ",
        location: { country: "Belarus", city: "Minsk" },
      },
    ]);
  }
  return (
    <div className={s.user__wrap}>
      {props.users.map((u) => (
        <div key={u.id}>
          <img className={s.avatar} src={u.photoUrl} alt="" />
          <div className={s.userInfo}>
            <div className={s.user}>
              <div className={s.user_status}>
                {u.status} <button className={s.status_btn}>send status</button>
              </div>
              <div className={s.user_name}>{u.fullName}</div>
            </div>
            <div className={s.userLoc}>
              <span className={s.userLoc_country}>{u.location.country}</span>
              <span className={s.userLoc_city}>{u.location.city}</span>
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
