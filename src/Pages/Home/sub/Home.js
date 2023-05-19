//libraries
import React, { Fragment } from 'react'
//components
import Intro from '../components/Intro'
//css
import '../components/styles/index.css'
import Pricecards from '../components/Pricecards'

function Home() {
  return (
    <Fragment>
      <div className='home-wrap'>
        <Intro/>
        <Pricecards/>
      </div>
    </Fragment>
  )
}

export default Home