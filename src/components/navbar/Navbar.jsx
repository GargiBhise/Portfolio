import "./navbar.scss";
import React from 'react'
import { motion } from 'framer-motion'
import "../sidebar/Sidebar.jsx";

const Navbar = () => {
  return (
    <div className="navbar"> 
  
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial = {{opacity:0, scale:0.5}}
                    animate = {{opacity:1, scale:1}}
                    transition = {{duration:0.5}}
        >Welcome to my page</motion.span>
        <div className="social">
          <a href=""><img src="/linkedin.png" alt="LinkedIn"></img></a>
          <a href=""><img src="/github1.png" alt="Github"></img></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
