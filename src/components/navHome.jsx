import React from 'react';
//styles
import './styles/navHome.css';
// images
import Logo from '../images/logo.png';

const NavHome = () => (
    <div className="navHome-container">
        <nav>
            <div className="image-nav-home">
                <img src={Logo} alt="img2save"/>
            </div>
            <div className="links-nav-hero font-normal color-white">
                <p className="family-helvetica">about</p>
                <p className="family-helvetica">search</p>
            </div>
        </nav>
    </div>
)

export default NavHome;