import "./HeroimgStyles.css";
import IntroImg from "../assets/sun.jpg"
import { Link } from "react-router-dom";

import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <h1>Hi, I'm <span className="name">Jacinta</span></h1>
            <h2>I'm a <span className="name">Web Developer</span></h2>
            <div>
               <Link to="/project" className="btn">Projects</Link> 
               <Link to="/contact" className="btn-light">Contact</Link> 
            </div>

        </div>
    </div>
  )
}

export default Heroimg