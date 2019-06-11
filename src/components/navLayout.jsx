import React from 'react';
import { Link } from 'react-router-dom';
// components
import SwitchCheckbox from './switchCheckbox';
// logos images
import LogoWhite from '../images/logo.png';
import LogoBlack from '../images/logo-negro.png';
// style
import './styles/navLayout.css';


const NavLayout = props => {
    let { isNightMode, changeMode } = props;
    let background_color = isNightMode ? '#000000' : '#f1f1f2';
    return (
        <nav className="navSearch-container" style={{background : background_color }}>
            <Link to="/">
                <div className="image-container">
                    <img src={isNightMode ? LogoWhite :  LogoBlack} alt="img2save"/>
                </div>
            </Link>

            {props.children}

            <div className="linksAndMode-container">
                <SwitchCheckbox changeMode={changeMode}/>
            </div>
        </nav>
    )
} 

export default NavLayout;