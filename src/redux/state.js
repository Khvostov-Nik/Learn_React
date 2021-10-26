const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    _callSubcribe() {
      console.log("change state");
    },
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
    if (action.type === ADD_POST) {
      let lengthId = this._state.profilePage.posts.length;
      let newPost = {
        postsId: lengthId + 1,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubcribe(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubcribe(this._state);
    } else if (action.type === ADD_MESSAGE) {
      debugger;
      let lengthId = this._state.dialogPage.messages.length;
      let newMessage = {
        messageId: lengthId + 1,
        message: this._state.dialogPage.newMessageText,
      };
      this._state.dialogPage.messages.push(newMessage);
      this._state.dialogPage.newMessageText = "";
      this._callSubcribe(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogPage.newMessageText = action.newText;
      this._callSubcribe(this._state);
    }
  },
};

export const addPostAction = () => ({ type: ADD_POST });
export const updateNewPostTextAction = (text) => 
({type: UPDATE_NEW_POST_TEXT,newText: text});
export const addMessageAction = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextAction = (text) => 
({type: UPDATE_NEW_MESSAGE_TEXT,newText: text,});

export default store;
