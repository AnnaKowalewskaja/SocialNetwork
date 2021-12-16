import React from 'react';
import classes from './Header.module.css';
import logo from './../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={classes.header}>
      <img alt = "logo" src={logo} />

      <div className={classes.loginBlock}>
        
        { props.isAuth ? <a href = "">{props.login}</a> :
          <NavLink to = {'/login'}>Login</NavLink>
        }
        </div>
    </header>
  );
};


export default Header;