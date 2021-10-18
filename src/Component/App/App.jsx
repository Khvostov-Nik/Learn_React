import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "./../Dialogs/Dialogs";
import News from "./../News/News";
import Music from "./../Music/Music";
import Setting from "./../Setting/Setting";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="app-wraper-content">
          <Route path="/Profile" component={Profile} />
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Setting" component={Setting} />
        </div>
      </div>
      <div className="q"></div>
    </BrowserRouter>
  );
};

export default App;
