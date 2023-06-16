//Libraries
import React from 'react'
//components
//css
import './styles/header.css'
import LOGO from '../../../Assets/Images/onepercentlogo.jpg'

function Header() {
    return (
        <header className='header-wrap'>
            <a href='/'><img className='brand-img' src={LOGO} alt='brand' /></a>
            <p className='brand-description'>ONE PERCENT BETTER EVERYDAY</p>
        </header>
    )
}

export default Header