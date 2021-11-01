import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./Component/App/App";
import "./index.css";
import store from "./redux/reduxStor";
import reportWebVitals from "./reportWebVitals";

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>,
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state);
});

reportWebVitals();
