import "./FormStyles.css";
import { useState } from "react";

import React from 'react'


const Form = () => {
  
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Thank you for your message. I will get back to you shortly.");
    }



  return (
    <div className="form">
        <form action="" onSubmit={handleSubmit}>
            <label>Your name</label>
            <input type="text" 
                    name="name"
                    onChange={handleChange}
                    value={inputs.name || ''}
            />
            <label>Email</label>
            <input type="email"
                    name="email"
                    onChange={handleChange}
                    value={inputs.email || ''}
            
            />
            <label>Subject</label>
            <input type="text" 
                    name="subject"
                    onChange={handleChange}
                    value={inputs.subject || ''}
            
            />
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"
                    name="message"
                    onChange={handleChange}
                    value={inputs.message || ''}
            
            />
            <button className="btn">Submit</button>
        </form>
    
    </div>
  )
}

export default Form