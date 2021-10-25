import rerenderTree from './../render'
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
    ],
  },
  dialogPage: {
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

export let addPost = (postMessage)=>{
  let lengthId = state.profilePage.posts.length
  let newPost = {
    id:lengthId + 1,
    message: postMessage,
    likeCount: 0
  };
  state.profilePage.posts.push(newPost)
  rerenderTree()
};
export let addMessage = (Message)=>{
  let lengthId = state.dialogPage.messages.length
  let newMessage = {
    id:lengthId + 1,
    message: Message,
  };
  state.dialogPage.messages.push(newMessage)
  rerenderTree()
};

export default state;
