import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import userImage from "./../../../assets/images/user-image.png";
import classes from "./ProfileInfo.module.css";
import backgroundImage from "./../../../assets/images/image-background.jpeg"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  
  return (
    <div>
      <div className="content_box">
        <img
          className={classes.img_background}
          alt="background"
          src={backgroundImage}
        />
      </div>

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
            <p>{props.profile.aboutMe}</p>
            <div className="linksUser"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
