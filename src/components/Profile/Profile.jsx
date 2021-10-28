import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="wrapper-content">
    <ProfileInfo/>

      

      <MyPosts postsData ={props.forPosts}/>
    </div>
  );
};

export default Profile;
