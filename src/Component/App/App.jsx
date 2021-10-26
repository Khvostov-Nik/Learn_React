import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "./../Dialogs/Dialogs";
import News from "./../News/News";
import Music from "./../Music/Music";
import Setting from "./../Setting/Setting";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wraper">
      <Header />
      <Navbar />
      <div className="app-wraper-content">
        <Route
          path="/Profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
             
            />
          )}
        />
        <Route
          path="/Dialogs"
          render={() => (
            <Dialogs
              dialogPage={props.state.dialogPage}
              dispatch={props.dispatch}
             
            />
          )}
        />
        <Route path="/News" render={() => <News />} />
        <Route path="/Music" render={() => <Music />} />
        <Route path="/Setting" render={() => <Setting />} />
      </div>
    </div>
  );
};

export default App;
