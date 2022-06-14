import React from 'react'
import './aboutMe.css'
import person from '../../images/person.png'

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={person} alt="person icon"/>
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p>Hello, and welcome to my Portfolio. My name is Christopher, and I am a Full-stack Web Developer based out in the pacific northwest. My mission is to provide mobile-friendly applications that bring ease of use to those who need them, as well as make access easier for those who aren't technically inclined.</p>
     </div>
    </div>
  )
}

export default AboutMe
