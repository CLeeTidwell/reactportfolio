import React from 'react'
import './header.css'
import Typed from 'react-typed';

function Header() {
  return (
    <div className="main-info">
      <h1>What am I?</h1>
      <Typed 
        strings={[
          " ", 
          "A Software Engineer", 
          "Also known as...", 
          "Front-end Developer", 
          "Back-end Developer", 
          "Full-stack Developer", 
          "or...", 
          '"A Coder"', 
          " ", 
          " "]}
          typeSpeed={40}
          backSpeed={50}
          loop
      />
    </div>
  )
}

export default Header
