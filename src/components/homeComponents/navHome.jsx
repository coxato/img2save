import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './styles/navHome.css';
// images
import Logo from '../../images/logo.png';

const NavHome = () => (
    <div className="navHome-container">
        <nav>
            <Link to="/search">
            <div className="image-nav-home">
                <img src={Logo} alt="img2save"/>
            </div>
            </Link>
            <div className="links-nav-hero font-normal color-white family-helvetica">
                <p className="decoration-none">about</p>
             <Link to="/search" className="decoration-none color-white"><p>search</p></Link>
            </div>
        </nav>
    </div>
)

export default NavHome;