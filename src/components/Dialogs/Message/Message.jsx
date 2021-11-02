import classes from "./Message.module.css";
import React from "react";

const Message = (props) => {
  let message = props.message;

  return (
   <div>
     <div className={classes.message} >{message}</div>
    
   </div>


  );
};

export default Message;
