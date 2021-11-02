import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {addPost, addMessage} from './redux/state'


export let renderEntireTree = (state) => {ReactDOM.render(
  <React.StrictMode>
    <App state = {state} addPost={addPost} addMessage={addMessage}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);}

