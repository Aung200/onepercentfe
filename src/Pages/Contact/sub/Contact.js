import React, { Fragment } from 'react'
//css
import '../components/contact.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact() {
  return (
    <Fragment>
      <div className='contact-wrap'>
        <div className='contact-title'>Get In Touch :</div>
        <div className='contact-details-wrap'>
          <p className='contact-icon-wrap'><WhatsAppIcon style={{ paddingRight: '5px' }} />+65 8458 6090</p>
          <p className='contact-icon-wrap'><InstagramIcon style={{ paddingRight: '5px' }} />onepercent_sg</p>
          <p className='contact-icon-wrap'><MailOutlineIcon style={{ paddingRight: '5px' }} />clients.onepercentsg@gmail.com</p>
        </div>
      </div>
    </Fragment >
  )
}

export default Contact