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
        <div className='icon-group-wrap' style={{marginBottom:'10px'}}>
          <a className='icon-wrap' href='https://instagram.com/onepercent_sg?igshid=MzRlODBiNWFlZA==' target='blank'>
            <InstagramIcon style={{ paddingRight: '5px' }} />onepercent_sg</a>
          <p className='icon-wrap'>
            <WhatsAppIcon style={{ paddingRight: '5px' }} />+65 8458 6090
          </p>
          <a className='icon-wrap' href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=clients.onepercentsg@gmail.com" target='blank' >
            <MailOutlineIcon style={{ paddingRight: '5px' }} />clients.onepercentsg@gmail.com</a>
        </div>
        <div>Submit a feedback form <a href='https://forms.gle/gT2BNt1LhZ4qfTU5A' style={{color: 'var(--dark)'}} target='blank'>here</a></div>
        <p>© OnePercentSG | All Rights Reserved</p>
      </div>
    </Fragment>
  )
}

export default index