import React from 'react'
import './header.css'
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div className="main-info">
      <h1>What am I? </h1>
      
      <br></br><Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("A Software Engineer")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Also known as...",)
  
  .pauseFor(1000)
  .deleteAll()
  .typeString("A Web Developer")

  .pauseFor(1000)
  .deleteAll()
  .typeString("A Web Designer")

  .pauseFor(1000)
  .deleteAll()
  .typeString("Front-end Developer")

  .pauseFor(1000)
  .deleteAll()
  .typeString("Back-end Developer")

  .pauseFor(1000)
  .deleteAll()
  .typeString("Full-stack Developer")

  .pauseFor(1000)
  .deleteAll()
  .typeString("or...")

  .pauseFor(1000)
  .deleteAll()
  .typeString("'A Coder'")
  .start();
  }}
  />
    </div>
  )
}

export default Header
