import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Component/App/App";
import { BrowserRouter} from "react-router-dom";
import {addPost} from "./store/state";
import {addMessage} from "./store/state";
import state from "./store/state";

export let rerenderTree=()=>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={addMessage}/>
    </BrowserRouter>,
    document.getElementById("root")
  );
}