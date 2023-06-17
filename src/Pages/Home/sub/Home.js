//libraries
import React, { Fragment } from 'react'
//components
import Intro from '../components/Intro'
import FloatingWhatsapp from '../../../Custom/FloatingWhatsapp'
//css
import '../components/styles/index.css'
import Pricecards from '../components/Pricecards'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <Fragment>
      <div className='home-wrap'>
        <Intro/>
        <Pricecards/>
        <Testimonial/>
      </div>
    </Fragment>
  )
}

export default Home