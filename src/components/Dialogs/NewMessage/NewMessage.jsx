import classes from "./NewMessage.module.css";
import React from "react";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../../redux/dialogs-reducer";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  let newMessageText = props.newMessageText;

  let sendMessage = (e) => {
    props.dispatch(sendMessageCreator());
    newMessageElement.current.value = "";
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
   
    props.dispatch(updateNewMessageTextCreator(text));
   // newMessageElement.current.value = text;
  };

  return (
    <div>
      <div className={classes.newMessage}>
        <textarea
          ref={newMessageElement}
          value={newMessageText}
          onChange={onMessageChange}
          placeholder="Enter your message"
        ></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default NewMessage;
