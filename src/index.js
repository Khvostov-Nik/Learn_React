import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store/state";
import App from "./Component/App/App";
import "./index.css";

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
        addMessage={store.addMessage.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState());
store.subscribe(rerenderTree);

reportWebVitals();
