import * as axios from "axios";
import React from "react";
import userPhoto from "./../../img/avatar.png";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => this.props.setUsers(response.data.items));
  }
  render() {
    return (
      <div className={s.user__wrap}>
        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={s.btn}
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
