import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import state, {
  addPost,
  addMessage,
  updateNewPostText,
  updateNewMessageText,
  subscribe,
} from "./store/state";
import App from "./Component/App/App";
import "./index.css";

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
        addMessage={addMessage}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(state);
subscribe(rerenderTree);

reportWebVitals();
