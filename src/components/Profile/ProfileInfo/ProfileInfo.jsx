import React from "react";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
       <div className="content_box">
        <img
          className={classes.img_background}
          alt="background"
          src="https://image.freepik.com/free-vector/blue-white-polygonal-mosaic-background_1035-18004.jpg"
        />

        
      </div>

      <div className={"content_box separate " + classes.description}>
        <img
          className={classes.img_avatar}
          alt="avatar"
          src="https://www.fineartstorehouse.com/p/629/lens-photography-camera-aperture-dslr-14722677.jpg"
        />
        ava+description
        
      </div>
    </div>
     
     
  );
};

export default ProfileInfo;
