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
       <p><b>Click the link below for my downloadable resume</b></p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia placeat eos atque veniam voluptatum sapiente ipsum tempore iste, omnis cumque velit autem consectetur. Veritatis molestias ullam voluptas nostrum? Dolorum.</p>
     </div>
    </div>
  )
}

export default Resume
