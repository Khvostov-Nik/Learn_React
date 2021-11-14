import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../Users/UsersContainer";
import DialogsContainer from "./../Dialogs/DialogsContainer";
import Music from "./../Music/Music";
import News from "./../News/News";
import Setting from "./../Setting/Setting";
import "./App.css";

const App = (props) => {
  return (
    <div className="app-wraper">
      <Header />
      <Navbar />
      <div className="app-wraper-content">
        <Route path="/Profile/:userId?" render={() => <ProfileContainer/>} />
        <Route
          path="/Dialogs"
          render={() => <DialogsContainer/>}
        />
        <Route path="/Users" render={() => <UsersContainer />} />
        <Route path="/News" render={() => <News />} />
        <Route path="/Music" render={() => <Music />} />
        <Route path="/Setting" render={() => <Setting />} />
      </div>
    </div>
  );
};

export default App;
