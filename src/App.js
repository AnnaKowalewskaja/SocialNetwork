import logo from "./logo.svg";
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

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper_content">
          <Route path = '/dialogs' component={Dialogs} />
          <Route path = '/profile' component={Profile} />
          <Route path = '/news' component={News} />
          <Route path = '/settings' component={Settings} />
          <Route path = '/music' component={Music} />
        </main>
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;
