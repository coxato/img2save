import React from 'react';

// logos images
import LogoWhite from '../images/logo.png';
//import LogoBlack from '../images/logo-negro.png';

const NavSearch = props => {
    return (
        <nav className="navSearch-container">
            <div className="image-container">
                <img src={LogoWhite} alt="img2save"/>
            </div>

            <div className="searchInput-container">
                hola soy el input
            </div>

            <div className="linksAndMode-container">
                modo-nocturno
            </div>
        </nav>
    )
}

export default NavSearch;