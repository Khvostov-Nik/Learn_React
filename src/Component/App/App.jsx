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
          <Route path="/Profile" render = { () => ( <Profile posts={props.appState.posts} /> ) } />
          <Route path="/Dialogs" render = { () => ( <Dialogs messages={props.appState.messages} dialogs={props.appState.dialogs}/> ) } />
          <Route path="/News" render = { () => ( <News /> ) } />
          <Route path="/Music" render = { () => ( <Music /> ) } />
          <Route path="/Setting" render = { () => ( <Setting /> ) } />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
