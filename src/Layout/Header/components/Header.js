//Libraries
import React from 'react'
//components

//css
import './styles/header.css'
import LOGO from '../../../Assets/Images/brandlogo.PNG'

function Header() {
    return (
        <header className='header-wrap'>
            <img className='brand-img' src={LOGO} alt='brand' />
            <p className='brand-description'>ONE PERCENT BETTER EVERYDAY</p>
        </header>
    )
}

export default Header