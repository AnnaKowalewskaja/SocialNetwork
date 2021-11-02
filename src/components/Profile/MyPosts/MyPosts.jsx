import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = props.postsData;

  let postsElements = postsData.map(data => 
    (<Post message={data.message} likeCount={data.likeCount} />)
 )

let newPostsElement = React.createRef()
 let addPost =() => {
   
  let text = newPostsElement.current.value; 
  props.addPost(text);
  newPostsElement.current.value ='';

}
  ;

  return (
    <div className={"content_box separate "+classes.blockPosts  }>
      <h3>My posts</h3>

      <div className={classes.newPost}>
        <textarea ref={newPostsElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={classes.posts}>
        {postsElements}
      </div>

      
    </div>
  );
};

export default MyPosts;
