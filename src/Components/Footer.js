import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location"> <FaHome  size={20} style={{color: "#fff", marginRight:'2rem' }}/> 
                <div>
                <p>Kamakis,Eastern Bypass</p>
                    <p> Kenya</p>
                </div>
                </div>
                    
                
                <div className="phone">
                 <h4><FaPhone  size={20} style={{color: "#fff", marginRight:'2rem' }}/> 254-796-032-834 </h4>   
                </div>

                <div className="email">
                 <h4><FaMailBulk  size={20} style={{color: "#fff", marginRight:'2rem' }}/> jacintanjugunaa@gmail.com </h4>   
                </div>


                </div>
               
            <div className="right">
                <h4>About me</h4>
                <p>This is me,Jacinta Njuguna.I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                <FaTwitter  size={30} style={{color: "#fff", marginRight:'1rem' }}/>
                <FaLinkedin size={30} style={{color: "#fff", marginRight:'1rem' }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer