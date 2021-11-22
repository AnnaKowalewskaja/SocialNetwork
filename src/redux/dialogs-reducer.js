const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = state.newMessageText;
      state.newMessageText = "";
      let id = state.messagesData[state.messagesData.length - 1].id + 1;
      let newMessage = {
        id: id,
        message: body,
      };
      state.messagesData.push(newMessage);
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.body;
      return state;

    default:
      return state;
  }
};



export const sendMessageCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body,
});

