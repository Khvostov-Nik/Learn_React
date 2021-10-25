import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App/App";
import { BrowserRouter} from "react-router-dom";
import {addPost, addMessage, updateNewPostText,updateNewMessageText} from "./store/state";

import "./index.css";

 let rerenderTree=(state)=>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage}/>
    </BrowserRouter>,
    document.getElementById("root")
  );
}
export default rerenderTree;