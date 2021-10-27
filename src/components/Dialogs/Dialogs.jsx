import React from "react";
import DialogItem from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Rita" },
    { id: 3, name: "Vika" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Vania" },
    { id: 6, name: "Nik" },
  ];

  let dialogsElements = dialogsData.map(data => 
     (<DialogItem name={data.name} id={data.id} />)
  )


  let messagesData = [
    { id: 1, message: "hello" },
    { id: 2, message: "hello" },
    { id: 3, message: "hi" },
    { id: 4, message: "how are you" },
    { id: 5, message: "Ok" },
    { id: 6, message: "Ok" },
  ];

  let messagesElements = messagesData.map(data =>
    (<Message message={data.message} />));

  return (
    <div className="wrapper-content " className={classes.dialogs}>
      <div className="content_box separate">
        <div className={classes.dialogs__items}>
          {
            dialogsElements
          }
          {/*
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
  <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
  */}
        </div>
      </div>

      <div className="content_box separate">
        <div className={classes.messages__items}>
          {
            messagesElements
          }
          {/* <Message message={messageData[0].message} />
          <Message message={messageData[1].message} />
          <Message message={messageData[2].message} />
          <Message message={messageData[3].message} />
          <Message message={messageData[4].message} />
          <Message message={messageData[5].message} /> */}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
