import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavLinks.module.css';


const NavLinks = (props) => {
  return (
  
      <li className={classes.item}>
        <NavLink className={classes.link} activeClassName = {classes.activeLink} to={props.link} >{props.text}</NavLink>
      </li>

   

  
  );
};

export default NavLinks;