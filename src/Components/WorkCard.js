import "./WorkCardStyles.css";


import React from 'react'
// import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

const WorkCard = (props) => {
  return (
    
    <div className="project-card">
    <img src={props.imgsrc} alt='IMG' />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <Link to="github.com" className="btn"> View</Link>
            <Link to="/github.com" className="btn"> Source</Link>
        </div>
    </div>
</div>
  )
}

export default WorkCard