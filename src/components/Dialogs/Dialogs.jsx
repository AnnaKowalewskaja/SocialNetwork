import React from "react";
import DialogItem from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map((data) => (
    <DialogItem name={data.name} key={data.id} id={data.id} avatar={data.avatar} />
  ));

  let messagesElements = props.messagesData.map((data) => (
    <Message key={data.id} message={data.message} />
  ));

  let newMessageElement = React.createRef();

  return (
    <div className="wrapper-content " className={classes.dialogs}>
      <div className="content_box separate">
        <div className={classes.dialogs__items}>{dialogsElements}</div>
      </div>

      <div className="content_box separate">
        <div className={classes.messages__items}>
          <div>{messagesElements}</div>
        </div>
        <NewMessage updateNewMessageBody={props.updateNewMessage} sendMessage ={props.sendMessageClick} />
      </div>
    </div>
  );
};

export default Dialogs;
