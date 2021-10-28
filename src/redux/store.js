import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    _callSubcribe() {},
    profilePage: {
      newPostText: "",
      posts: [
        {
          postsId: 1,
          message: "Lorem ipsum dolor sit amet consectetur.",
          likeCount: "12",
        },
        { postsId: 2, message: "Lorem ipsum dolor sit.", likeCount: "8" },
        {
          postsId: 3,
          message: "Lorem ipsum dolor sit amet..",
          likeCount: "11",
        },
        {
          postsId: 4,
          message: "Lorem ipsum dolor sit amet.flkgm.",
          likeCount: "19",
        },
      ],
    },
    dialogPage: {
      newMessageText: "",
      dialogs: [
        { userId: 1, name: "Kolayn" },
        { userId: 2, name: "Dimych" },
        { userId: 3, name: "Ivan" },
        { userId: 4, name: "Valera" },
      ],
      messages: [
        {
          messageId: 1,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Necessitatibus, deserunt.",
        },
        {
          messageId: 2,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, sit sapiente doloremque eum voluptatem aliquid.",
        },
        { messageId: 3, message: "Lorem ipsum dolor sit amet." },
        {
          messageId: 4,
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          messageId: 5,
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi veniam quis aperiam quibusdam alias!",
        },
        {
          messageId: 6,
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi veniam quis aperiam quibusdam alias!",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubcribe = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._callSubcribe(this._state);
  },
};

export default store;
