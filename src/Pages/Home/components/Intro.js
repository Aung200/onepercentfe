//libraries
import React, { Fragment } from 'react'
//components

//css
import './styles/intro.css'

function Intro() {
  return (

    <Fragment>
      <div className='intro-wrap'>
        <p className='intro-desc-title'>About:</p>
        <p className='intro-desc'>
          We help individuals who lack confidence & motivation accomplish their fitness goals & lead a healthy lifestyle through personal coaching.
        </p>
        <a className='consult-title' href={`https://wa.me/84586090/?text=${"Hi, I would like to book a consultation."}`} target="blank">Book a consultation with us</a>
        <p className='consult-desc'>We would have one of us to book you a call and see whether we are best fit to work with you.</p>
      </div >
    </Fragment >
  )
}

export default Intro