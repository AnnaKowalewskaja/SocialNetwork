import React from "react";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div className="wrapper-content">
      <ProfileInfo profile = {props.profile} status={props.status} updateStatus={props.updateStatus} />

      <MyPostsContainer
        state={props.state}
        store={props.store}
      />
    </div>
  );
};

export default Profile;
