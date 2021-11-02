const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initionalState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   fullName: "Nikolay",
    //   status: "earn and spend ",
    //   location: { city: "Russia", coutry: "Kirishi" },
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   fullName: "Nik",
    //   status: "bla bla",
    //   location: { city: "Russia", coutry: "Moscov" },
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   fullName: "Aleks",
    //   status: "up up ",
    //   location: { city: "Belarus", coutry: "Minsk" },
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
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
