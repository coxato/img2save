import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/themeColor';
// components
import SwitchCheckbox from './switchCheckbox';
// logos images
import LogoWhite from '../images/logo.png';
import LogoBlack from '../images/logo-negro.png';
// style
import './styles/navLayout.css';

let themes = {
    background: {
        light: '#f1f1f2',
        dark: '#000',
    },
    logo: {
        light: LogoBlack,
        dark: LogoWhite
    } 
}

const NavLayout = props => {
    const { theme } = useContext(ThemeContext);

    return (
        <nav className="navSearch-container" style={{background: themes.background[theme] }}>
            <Link to="/">
                <div className="image-container">
                    <img src={themes.logo[theme]} alt="img2save"/>
                </div>
            </Link>

            {props.children}

            <div className="linksAndMode-container">
                <SwitchCheckbox/>
            </div>
        </nav>
    )
} 

export default NavLayout;