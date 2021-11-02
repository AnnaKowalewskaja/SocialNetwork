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



const App = (props) => {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper_content">
         

          <Route path = '/dialogs' render={() => <Dialogs forDialogs = {props.state.dialogsPage.dialogsData} forMessages = {props.state.dialogsPage.messagesData} addMessage={props.addMessage}/>} />
          <Route path = '/profile' render={() => <Profile forPosts = {props.state.profilePage.postsData} addPost={props.addPost}/>} />
          <Route path = '/news' render={() => <News/>} />
          <Route path = '/settings' render={() => <Settings/>} />
          <Route path = '/music' render={() => <Music/>} />
        </main>
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;
