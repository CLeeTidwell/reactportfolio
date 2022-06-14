import React from 'react'
import './resume.css'
import document from '../../images/document.png'

function Resume() {
  return (
    <div className="resume__container" id="resume">
     <div>
      <img src={document} alt="document icon"/>
     </div>
     <div className="resume__text">
        <h1>Resume</h1>
       <p><b>Click the link below for my resume</b></p>
       <p><a href="https://docs.google.com/document/d/1dzcDjlG6YZJRgwuzaEcBxvUnlNM7WsiF0Bbko3DCq0w/edit?usp=sharing">Link to Resume</a></p>
     </div>
    </div>
  )
}

export default Resume
