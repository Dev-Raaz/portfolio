/**
 * @titl Navbar
 * @desc This is used to navigate through the site.
 */
import React from 'react'
//import MobNav from './MobNav'

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img src='/res/officials/logoDS.svg' alt='Logo of Debraj Singh Portfolio'/>
                <span>DS</span>
            </a>

            <div className='navbar-grp'>
                <div className='navbar-links'>
                    <a href='#works-n-more'>
                        Works
                    </a>
                    <a href='/#'>
                        About
                    </a>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar