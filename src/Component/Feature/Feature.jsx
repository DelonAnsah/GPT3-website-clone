import React from 'react'
import './Feature.css'

const Feature = ({ title, text }) => {
  console.log(title, text);
  return (
    <div className='gpt3__features-container__feature'>
    {title && (
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
    )}
     {text && (
      <div className="gpt3__features-container__feature-text">
       <p>{text}</p> 
      </div>
    )}
    </div>
  )
}

export default Feature
