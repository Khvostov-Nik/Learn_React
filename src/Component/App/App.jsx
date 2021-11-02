import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Users from "../Users/Users";
import DialogsContainer from "./../Dialogs/DialogsContainer";
import Music from "./../Music/Music";
import Setting from "./../Setting/Setting";
import "./App.css";

const App = (props) => {
  return (
    <div className="app-wraper">
      <Header />
      <Navbar />
      <div className="app-wraper-content">
        <Route path="/Profile" render={() => <Profile/>} />
        <Route
          path="/Dialogs"
          render={() => <DialogsContainer/>}
        />
        <Route path="/Users" render={() => <Users />} />
        <Route path="/Music" render={() => <Music />} />
        <Route path="/Setting" render={() => <Setting />} />
      </div>
    </div>
  );
};

export default App;
