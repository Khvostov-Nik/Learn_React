const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initionalState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:"https://img.ltwebstatic.com/images3_pi/2021/06/02/1622617038df9d8f149669e5aa70027c7ab0cf5ea9.jpg",
    //   followed: true,
    //   fullName: "Nikolay",
    //   status: "earn and spend ",
    //   location: {country: "Russia", city: "Kirishi" },
    // },
    // {
    //   id: 2,
    //   photoUrl:"https://yt3.ggpht.com/ytc/AAUvwnh_YjSjUyud8lrIBDZL0E3CnZ_FlDk7T4zD4__3ZQ=s900-c-k-c0x00ffffff-no-rj",
    //   followed: false,
    //   fullName: "Nik",
    //   status: "bla bla",
    //   location: {country: "Russia", city: "Moscov" },
    // },
    // {
    //   id: 3,
    //   photoUrl:"https://klike.net/uploads/posts/2018-06/1528369868_15.jpg",
    //   followed: true,
    //   fullName: "Aleks",
    //   status: "up up ",
    //   location: {country: "Belarus", city: "Minsk" },
    // },
  ],
};

const usersReducer = (state = initionalState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
