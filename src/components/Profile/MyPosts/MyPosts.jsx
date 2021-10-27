import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you", likeCount: 12 },
    { id: 2, message: "Hello", likeCount: 14 },
    { id: 3, message: "Hi", likeCount: 14 },
  
  ]

  let postsElements = postsData.map(data => 
    (<Post message={data.message} likeCount={data.likeCount} />)
 )
  return (
    <div className={"content_box separate "+classes.blockPosts  }>
      <h3>My posts</h3>
      <div className={classes.newPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>

      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
