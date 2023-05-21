//libraries
import React, { Fragment } from 'react'
//css
import './components/styles/index.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function index() {

  return (
    <Fragment>
      <div className='footer-wrap'>
        <div className='icon-group-wrap'>
          <a className='icon-wrap' href='https://instagram.com/onepercent_sg?igshid=MzRlODBiNWFlZA==' target='blank'>
            <InstagramIcon style={{ paddingRight: '5px' }} />onepercent_sg</a>
          <p className='icon-wrap'>
            <WhatsAppIcon style={{ paddingRight: '5px' }} />+65 8458 6090
          </p>
          <p className='icon-wrap'>
            <MailOutlineIcon style={{ paddingRight: '5px' }} />clients.onepercentsg@gmail.com
          </p>
        </div>
        <p>© OnePercentSG | All Rights Reserved</p>
      </div>
    </Fragment>
  )
}

export default index