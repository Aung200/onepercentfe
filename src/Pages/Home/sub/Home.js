//libraries
import React, { Fragment } from 'react'
//components
import Intro from '../components/Intro'
import FloatingWhatsapp from '../components/FloatingWhatsapp'
//css
import '../components/styles/index.css'
import Pricecards from '../components/Pricecards'

function Home() {
  return (
    <Fragment>
      <div className='home-wrap'>
        <Intro/>
        <Pricecards/>
        <FloatingWhatsapp/>
      </div>
    </Fragment>
  )
}

export default Home