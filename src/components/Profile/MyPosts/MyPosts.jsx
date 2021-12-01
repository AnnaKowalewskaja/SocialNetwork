import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = props.postsData;

  let postsElements = postsData.map((data) => (
    <Post message={data.message} key={data.id} likeCount={data.likeCount} />
  ));

  let newPostsElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    let text = newPostsElement.current.value = "";
    props.updateNewPostText(text);
  };

  let onPostChange = () => {
    let text = newPostsElement.current.value;
    props.updateNewPostText(text);
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
        <button onClick={onAddPost}>Add post</button>
      </div>

      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
