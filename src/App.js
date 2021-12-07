import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Users from "./components/Users/Users";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="app-wrapper_content">
        <Route
          path="/profile"
          render={() => <Profile state={props.state} store={props.store} />}
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
