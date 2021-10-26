let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Lorem ipsum dolor sit amet consectetur.",
          likeCount: "12",
        },
        { id: 2, message: "Lorem ipsum dolor sit.", likeCount: "8" },
        { id: 3, message: "Lorem ipsum dolor sit amet..", likeCount: "11" },
        {
          id: 4,
          message: "Lorem ipsum dolor sit amet.flkgm.",
          likeCount: "19",
        },
      ],
      newPostText: "",
    },
    dialogPage: {
      newMessageText: "",
      dialogs: [
        { id: 1, name: "Kolayn" },
        { id: 2, name: "Dimych" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Valera" },
      ],
      messages: [
        {
          id: 1,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Necessitatibus, deserunt.",
        },
        {
          id: 2,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, sit sapiente doloremque eum voluptatem aliquid.",
        },
        { id: 3, message: "Lorem ipsum dolor sit amet." },
        {
          id: 4,
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 5,
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi veniam quis aperiam quibusdam alias!",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  callSubcribe() {
    console.log("change state");
  },
  addPost() {
    let lengthId = this._state.profilePage.posts.length;
    let newPost = {
      id: lengthId + 1,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this.callSubcribe(this._state);
  },
  addMessage() {
    let lengthId = this._state.dialogPage.messages.length;
    let newMessage = {
      id: lengthId + 1,
      message: this._state.dialogPage.newMessageText,
    };
    this._state.dialogPage.messages.push(newMessage);
    this._state.dialogPage.newMessageText = "";
    this.callSubcribe(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.callSubcribe(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogPage.newMessageText = newText;
    this.callSubcribe(this._state);
  },
  subscribe(observer) {
    this.callSubcribe = observer;
  },
};

export default store;
