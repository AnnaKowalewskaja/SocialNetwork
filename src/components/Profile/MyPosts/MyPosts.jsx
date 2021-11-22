import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';


const MyPosts = (props) => {
  let postsData = props.postsData;

  let postsElements = postsData.map((data) => (
    <Post message={data.message} likeCount={data.likeCount} />
  ));

  let newPostsElement = React.createRef();

  let addPost = () => {
    //  let text = newPostsElement.current.value;
    props.dispatch(addPostActionCreator());
    newPostsElement.current.value ='';
  };


  let onPostChange = () => {
    let text = newPostsElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
    newPostsElement.current.value = text;
  };

  return (
    <div className={"content_box separate " + classes.blockPosts}>
      <h3>My posts</h3>

      <div className={classes.newPost}>
        <textarea
          ref={newPostsElement}
         
          onChange={onPostChange}
          value={props.newPostText}
          placeholder="Write new post"
        />
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
