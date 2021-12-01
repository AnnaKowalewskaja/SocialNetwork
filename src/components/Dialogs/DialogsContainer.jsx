import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageTextCreator,
  sendMessageCreator,
} from "./../../redux/dialogs-reducer";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
    sendMessageClick: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
