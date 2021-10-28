const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initionalState = {
  newPostText: "",
  posts: [
    {
      postId: 1,
      message: "Lorem ipsum dolor sit amet consectetur.",
      likeCount: "12",
    },
    { postId: 2, message: "Lorem ipsum dolor sit.", likeCount: "8" },
    {
      postId: 3,
      message: "Lorem ipsum dolor sit amet..",
      likeCount: "11",
    },
    {
      postId: 4,
      message: "Lorem ipsum dolor sit amet.flkgm.",
      likeCount: "19",
    },
  ],
}

const profileReducer = (state = initionalState, action) => {
  switch (action.type) {
    case ADD_POST:
      let lengthId = state.posts.length;
      let newPost = {
        postId: lengthId + 1,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addPostAction = () => ({ type: ADD_POST });
export const updateNewPostTextAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
