import {renderEntireTree} from './../render';

let state = {
    profilePage:{
        postsData: [
            { id: 1, message: "Hi, how are you", likeCount: 12 },
            { id: 2, message: "Hello", likeCount: 134 },
            { id: 3, message: "Hi", likeCount: 14 },
          
          ],
    },
  dialogsPage:{
    dialogsData:[
        { id: 1, name: "Dima", avatar:'./img/avatars/avatar1.png' },
        { id: 2, name: "Rita" ,avatar:'./img/avatars/avatar1.png' },
        { id: 3, name: "Vikaa", avatar:'./img/avatars/avatar1.png'},
        { id: 4, name: "Sveta", avatar:'./img/avatars/avatar1.png'},
        { id: 5, name: "Vania", avatar:'./img/avatars/avatar1.png'},
        { id: 6, name: "Nik", avatar:'./img/avatars/avatar1.png'},
      ],

      messagesData:[
        { id: 1, message: "hello" },
        { id: 2, message: "hello" },
        { id: 3, message: "hi" },
        { id: 4, message: "how are you" },
        { id: 5, message: "Ok" },
        { id: 6, message: "Ok" },
      ],
  }

    

}
export let addPost = (postMessage) =>{
  let newPost ={
    id: 5,
    message :postMessage,
    likeCount: 9,
  };

  state.profilePage.postsData.push(newPost);
  renderEntireTree(state);
} 

export let addMessage = (message) =>{

  let id = state.dialogsPage.messagesData[state.dialogsPage.messagesData.length-1].id+1;
  let newMessage = {
    id: id, message: message,
  };

  state.dialogsPage.messagesData.push(newMessage);
 
  renderEntireTree(state);
}

export default state;