//Libraries
import React from 'react'
//components
import { Link } from 'react-router-dom';
//css
import './styles/header.css'
import LOGO from '../../../Assets/Images/onepercentlogo.jpg'

function Header() {
    return (
        <header className='header-wrap'>
            <a href='/'><img className='brand-img' src={LOGO} alt='brand' /></a>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/program">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <p className='brand-description'>ONE PERCENT BETTER EVERYDAY</p>
        </header>
    )
}

export default Header