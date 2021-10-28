import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Component/App/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState());
store.subscribe(rerenderTree);

reportWebVitals();
