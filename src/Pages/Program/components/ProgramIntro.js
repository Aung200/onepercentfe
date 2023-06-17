import React, { Fragment } from 'react'
//components

//css
import './styles/programintro.css'

function ProgramIntro() {
  return (
    <Fragment>
      <div className='programIntro-wrap'>
        <p className='program-IPPT'>Tired of failing IPPT? We understand you and we want to help YOU. </p>
        <div className='program-about-title'>About:</div>
        <div className='program-about'>We are reaching out to all Students, NSmen, NSFs and anyone who is keen to do well in their IPPT!</div>
        <div className='program-about'>In this program, we will teach & guide you on how to attain that prestigious Gold and earn that extra $300-$500 as your incentive reward!</div>
        <div className='program-about' style={{paddingBottom:'80px'}}>As we aim to bring as much value as we can to serve you, we are subjected to limited slots.</div>
      </div>
    </Fragment>
  )
}

export default ProgramIntro