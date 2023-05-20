//libraries
import React, { Fragment } from 'react'
//css
import './components/styles/index.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function index() {

  const text = "Hi! Would like to ask more about workout plans."

  return (
    <Fragment>
      <div className='footer-wrap'>
        <div className='icon-group-wrap'>
          <a className='icon-wrap' href='https://instagram.com/onepercent_sg?igshid=MzRlODBiNWFlZA==' target='blank'>
            <InstagramIcon style={{ paddingRight: '5px' }} />onepercent_sg</a>
          <a className='icon-wrap' href={`https://wa.me/84586090/?text=${text}`} target='blank'>
            <WhatsAppIcon style={{ paddingRight: '5px' }} />+65 8458 6090
          </a>
          <a className='icon-wrap' href='mailto:aung.m.m.phyo@gmail.com' target=''>
            <MailOutlineIcon style={{ paddingRight: '5px' }} />clients.onepercentsg@gmail.com
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default index