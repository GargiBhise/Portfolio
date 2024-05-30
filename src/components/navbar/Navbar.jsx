import "./navbar.scss";
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar"> 
      {/* Sidebar */}
      <div className="wrapper">
        <span>Welcome to my page</span>
        <div className="social">
          <a href=""><img src="/linkedin.png" alt="LinkedIn"></img></a>
          <a href=""><img src="/github1.png" alt="Github"></img></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
