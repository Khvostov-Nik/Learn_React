import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Component/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter} from "react-router-dom";
import state from "./store/state";

ReactDOM.render(
  <BrowserRouter>
    <App state={state} />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
