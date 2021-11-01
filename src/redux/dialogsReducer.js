const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let intionalState = {
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
};

const dialogsReducer = (state = intionalState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let lengthId = state.messages.length;
      let newMessage = {
        messageId: lengthId + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, newMessage],
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};
export const addMessageAction = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextAction = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
