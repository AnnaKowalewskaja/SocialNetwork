import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Dialog.module.css";

const Dialog = (props) => {
  let path='/dialogs/'+props.id,
  name=props.name;
  return (
   <div className={classes.dialog}>
 <NavLink to={path} className={classes.dialog}>{name}</NavLink>
   </div>
       
        
  );
};

export default Dialog;
