import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Component/App/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStor";

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState());
store.subscribe(()=>{
  let state = store.getState() ;
  rerenderTree(state)});

reportWebVitals();
