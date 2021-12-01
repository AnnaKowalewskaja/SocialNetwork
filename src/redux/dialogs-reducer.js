const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Dima", avatar: "./img/avatars/avatar1.png" },
    { id: 2, name: "Rita", avatar: "./img/avatars/avatar1.png" },
    { id: 3, name: "Vikaa", avatar: "./img/avatars/avatar1.png" },
    { id: 4, name: "Sveta", avatar: "./img/avatars/avatar1.png" },
    { id: 5, name: "Vania", avatar: "./img/avatars/avatar1.png" },
    { id: 6, name: "Nik", avatar: "./img/avatars/avatar1.png" },
  ],

  messagesData: [
    { id: 1, message: "hello" },
    { id: 2, message: "hello" },
    { id: 3, message: "hi" },
    { id: 4, message: "how are you" },
    { id: 5, message: "Ok" },
    { id: 6, message: "Ok" },
  ],

  newMessageText: "",
};

export const dialogsReducer = (state = initialState, action) => {
  let body = state.newMessageText;

  switch (action.type) {
    case ADD_MESSAGE:
      let id = state.messagesData[state.messagesData.length - 1].id + 1;
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: id, message: body }],
      };

    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.body,
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body,
});
