let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you", likeCount: 12 },
        { id: 2, message: "Hello", likeCount: 134 },
        { id: 3, message: "Hi", likeCount: 14 },
      ],

      newPostText: "Write new post",
      defaultPostText: "Write new post",
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
/*
  addPost() {
    let id =
      this._state.profilePage.postsData[
        this._state.profilePage.postsData.length - 1
      ].id + 1;
    let newPost = {
      id: id,
      message: this._state.profilePage.newPostText,
      likeCount: Math.floor(Math.random() * 300),
    };
    this._state.profilePage.postsData.push(newPost);
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage(message) {
    let id =
      this._state.dialogsPage.messagesData[
        this._state.dialogsPage.messagesData.length - 1
      ].id + 1;
    let newMessage = {
      id: id,
      message: message,
    };

    this._state.dialogsPage.messagesData.push(newMessage);

    this._callSubscriber(this._state);
  },

*/

  dispatch(action){ //{type: 'add-post'}
if(action.type === 'ADD-POST')
  {
    let id =
    this._state.profilePage.postsData[
      this._state.profilePage.postsData.length - 1
    ].id + 1;
  let newPost = {
    id: id,
    message: this._state.profilePage.newPostText,
    likeCount: Math.floor(Math.random() * 300),
  };
  this._state.profilePage.postsData.push(newPost);
  this._callSubscriber(this._state);
}else if (action.type === 'UPDATE-NEW-POST-TEXT'){
  this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
}else if(action.type === 'ADD-MESSAGE'){
  let id =
      this._state.dialogsPage.messagesData[
        this._state.dialogsPage.messagesData.length - 1
      ].id + 1;
    let newMessage = {
      id: id,
      message: action.message,
    };

    this._state.dialogsPage.messagesData.push(newMessage);

    this._callSubscriber(this._state);
}
},
}

export default store;
window.store = store;
