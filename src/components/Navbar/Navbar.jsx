import React from 'react';
import classes from './Navbar.module.css';
import NavLinks from './NavLinks/NavLinks';


const Navbar = () => {
  return (
    <nav className='content_box' className={classes.navigation} >
    <ul>
      
      <NavLinks link="/profile" text="Profile" ></NavLinks>
     
      <NavLinks link="/dialogs" text="Dialogs" ></NavLinks>
     
      <NavLinks link="/news" text="News" ></NavLinks>
     
      <NavLinks link="/music" text="Music" ></NavLinks>
     
      <NavLinks link="/settings" text="Settings" ></NavLinks>
     
      

   
    </ul>

   </nav>
  );
};

export default Navbar;