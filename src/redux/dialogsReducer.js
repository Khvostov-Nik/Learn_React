const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let intionalState = {
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
    {
      id: 6,
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
        id: lengthId + 1,
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
