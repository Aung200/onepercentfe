//libraries
import React, { Fragment } from 'react'
//components
//css
import './styles/intro.css'

function Intro() {
  return (
    <Fragment>
        <div className='intro-wrap'>
            <p className='intro-desc-title'>ACCELERATE YOUR RESULTS WITH PERSONAL COACHING!</p>
            <p className='intro-desc'>
              Meeting up regularly with your personal trainer will allow you to learn new 
              exercises and techniques faster and assess your current levels of fitness, movement pattern and 
              limitations more effeciently and prescribe a plan that will suit your fitness goals.
            </p>
        </div>
    </Fragment>
  )
}

export default Intro