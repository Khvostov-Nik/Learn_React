let rerenderTree = () => {
  console.log("change state");
};

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: "Lorem ipsum dolor sit amet consectetur.",
        likeCount: "12",
      },
      { id: 2, message: "Lorem ipsum dolor sit.", likeCount: "8" },
      { id: 3, message: "Lorem ipsum dolor sit amet..", likeCount: "11" },
      { id: 4, message: "Lorem ipsum dolor sit amet.flkgm.", likeCount: "19" },
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
};

export let addPost = () => {
  let lengthId = state.profilePage.posts.length;
  let newPost = {
    id: lengthId + 1,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderTree(state);
};
export let addMessage = () => {
  let lengthId = state.dialogPage.messages.length;
  let newMessage = {
    id: lengthId + 1,
    message: state.dialogPage.newMessageText,
  };
  state.dialogPage.messages.push(newMessage);
  state.dialogPage.newMessageText = "";
  rerenderTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};
export let updateNewMessageText = (newText) => {
  state.dialogPage.newMessageText = newText;
  rerenderTree(state);
};
export const subscribe = (observer) => {
  rerenderTree = observer;
};

export default state;
