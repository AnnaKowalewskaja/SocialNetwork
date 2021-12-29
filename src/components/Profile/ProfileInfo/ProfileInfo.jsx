import React from "react";

import Preloader from "../../common/Preloader/Preloader";
import userImage from "./../../../assets/images/user-image.png";
import classes from "./ProfileInfo.module.css";
import backgroundImage from "./../../../assets/images/image-background.jpeg"
import  ProfileStatus  from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  
  return (
    <div> 
      
      <div className={"content_box separate " + classes.description}>
        
        <img
          className={classes.img_avatar}
          alt={props.profile.fullName}
          src={
            props.profile.photos.small == null
              ? userImage
              : props.profile.photos.small
          }
        />
        <div>
          <div className="aboutUser">
            <p>{props.profile.fullName}</p>
           
             <ProfileStatus status = {props.status} updateStatus={props.updateStatus} />
            <div className="linksUser"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
