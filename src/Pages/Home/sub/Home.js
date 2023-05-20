//libraries
import React, { Fragment } from 'react'
//components
import Intro from '../components/Intro'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
//css
import '../components/styles/index.css'
import Pricecards from '../components/Pricecards'
import LOGO from '../../../Assets/Images/brandlogo1.PNG'

function Home() {
  return (
    <Fragment>
      <div className='home-wrap'>
        <Intro/>
        <Pricecards/>
        <FloatingWhatsApp 
              phoneNumber={"+6584586090"}
              accountName='One Percent Sg' 
              chatMessage='Hello there! 🤝 Ready to gain?'
              avatar={LOGO}/>
      </div>
    </Fragment>
  )
}

export default Home