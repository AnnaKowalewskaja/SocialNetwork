import React from "react";
import DialogItem from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {


  let dialogsElements = props.forDialogs.map(data => 
     (<DialogItem name={data.name} id={data.id} avatar = {data.avatar} />)
  )




  let messagesElements = props.forMessages.map(data =>
    (<Message message={data.message} />));

    let newMessageElement = React.createRef();

    let sendMessage = () =>{
      let text = newMessageElement.current.value;
      alert(text);
    }
  return (
    <div className="wrapper-content " className={classes.dialogs}>
      <div className="content_box separate">
        <div className={classes.dialogs__items}>
          {
            dialogsElements
          }
          
        </div>
      </div>

      <div className="content_box separate">
        <div className={classes.messages__items}>
          {
            messagesElements
          }
          
        </div>
        <NewMessage addMessage={props.addMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;
