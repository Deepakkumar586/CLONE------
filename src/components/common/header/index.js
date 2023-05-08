import React, { useState } from 'react'
import './header.css'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);



    const togglemobileMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className='mobile-menu-wrapper'>
            <div className={`mobile-menu only-mobile ${showMenu ? 'overlay' : ""}`} >
                <div className='mobile-navbar'>
                    <div className='mobile-nav-item'>credit score check</div>
                    <div className='mobile-nav-item'>CRED pay</div>
                </div>
            </div>
            <div className='flex max-width header'>
                <img src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png' className='header-logo' />


                <div className='only-mobile mobile-new-button-wrapper'>
                    <button class={`hamburger hamburger--spin ${showMenu ? 'is-active' : ""}`} type="button" onClick={togglemobileMenu}>
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>


                <div className='non-mobile flex'>
                    <div className='header-nav-item'>credit score check</div>
                    <div className='header-nav-item'>CRED pay</div>
                </div>
            </div>



        </div >
    )
}

export default Header
