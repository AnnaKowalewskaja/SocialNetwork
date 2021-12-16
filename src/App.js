import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Route } from "react-router";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <main className="app-wrapper_content">
        <Route
          path="/profile/:userId?"
          render={() => <ProfileContainer state={props.state} store={props.store} />}
        />

        <Route
          //route следит за url
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />

<Route path="/users" render={() => <UsersContainer/>} />

        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/music" render={() => <Music />} />
      </main>
    </div>
  );
};



export default App;

