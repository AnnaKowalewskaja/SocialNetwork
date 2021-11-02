import classes from "./NewMessage.module.css";
import React from "react";

const NewMessage = (props) => {
  

  let newMessageElement = React.createRef()
 let sendMessage =() => {
  let text = newMessageElement.current.value; 
  props.addMessage(text);
  newMessageElement.current.value='';
  };

  return (
   <div>
   <div className={classes.newMessage}>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    
   </div>


  );
};

export default NewMessage;
