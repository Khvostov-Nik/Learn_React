const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initionalState = {
  newPostText: "",
  posts: [
    {
      id: 1,
      message: "Lorem ipsum dolor sit amet consectetur.",
      likeCount: "12",
    },
    { id: 2, message: "Lorem ipsum dolor sit.", likeCount: "8" },
    {
      id: 3,
      message: "Lorem ipsum dolor sit amet..",
      likeCount: "11",
    },
    {
      id: 4,
      message: "Lorem ipsum dolor sit amet.flkgm.",
      likeCount: "19",
    },
  ],
};
const profileReducer = (state = initionalState, action) => {
  switch (action.type) {
    case ADD_POST:
      let lengthId = state.posts.length;
      let newPost = {
        id: lengthId + 1,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
