import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "./../Dialogs/Dialogs";
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
        <Route
          path="/Profile"
          render={() => (
            <Profile
              store={props.store}
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
