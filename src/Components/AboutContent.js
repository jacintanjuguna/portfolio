import "./AboutContentStyles.css";

import React from 'react'
import { Link } from 'react-router-dom'
import React1 from "../assets/react-1-logo-png.png"
import projCard2 from "../assets/project-card2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I am a react front-end developer.I create responsive secure websites for my clients and freelance writer of tech articles </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={projCard2} className="img" alt="" />
                </div>
                <div className="img-stack bottom">
                    <img src={React1} className="img" alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutContent