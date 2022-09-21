import './index.css';
import React from 'react';
import Home from './Routes/Home';
import Project from './Routes/Project';
import About from "./Routes/About";
import Contact from "./Routes/Contact";


import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
     <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
    </>
  );
}

export default App;
