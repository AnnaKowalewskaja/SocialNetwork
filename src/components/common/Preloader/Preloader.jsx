import React from "react";
import classes from "./Preloader.module.css";
import preloaderImg from "./../../../assets/images/preloader.gif";


let Preloader = (props) =>{
    return <div>
<img className = {classes.preloader_img} src={preloaderImg} /> 
    </div>
}

export default Preloader;