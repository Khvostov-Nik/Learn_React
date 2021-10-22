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
  messagesPage: {
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

export default state;
