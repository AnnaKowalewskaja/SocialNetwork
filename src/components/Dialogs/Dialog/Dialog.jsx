import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Dialog.module.css";

const Dialog = (props) => {
  let path='/dialogs/'+props.id,
  name=props.name,
  avatar = props.avatar;
  return (
   <div className={classes.dialog}>
   
 <NavLink to={path}  className={classes.dialogLink}> <img src = {avatar} className = {classes.avatarDialog} alt={`avatar ${name}`}/> {<span className = {classes.nameLink}> {name} </span>}</NavLink>
   </div>
       
        
  );
};

export default Dialog;
