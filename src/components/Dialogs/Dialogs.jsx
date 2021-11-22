import React from "react";
import DialogItem from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";
import {getState} from "../../redux/state";

const Dialogs = (props) => {

let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogsData.map(data => 
     (<DialogItem name={data.name} id={data.id} avatar = {data.avatar} />)
  )




  let messagesElements = state.messagesData.map(data =>
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
          <div>
          {
            messagesElements
          }
          </div>
         
          
        </div>
        <NewMessage dispatch={props.dispatch} />
      </div>
    </div>
  );
};

export default Dialogs;
