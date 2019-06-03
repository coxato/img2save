import React from 'react';
import { Link } from 'react-router-dom';
// components
import SearchInput from './searchInput';
// logos images
import LogoWhite from '../../images/logo.png';
import LogoBlack from '../../images/logo-negro.png';
// style
import './styles/navSearch.css';


const NavSearch = props => {
    let { isNightMode, clickSearch, onSearch, changeMode } = props;
    let background_color = isNightMode ? '#000000' : '#f1f1f2';
    return (
        <nav className="navSearch-container" style={{background : background_color }}>
            <Link to="/">
                <div className="image-container">
                    <img src={isNightMode ? LogoWhite :  LogoBlack} alt="img2save"/>
                </div>
            </Link>

            <div className="searchInput-container">
                <SearchInput 
                    onSearch={onSearch} 
                    isNightMode={isNightMode}
                    clickSearch={clickSearch}    
                />
            </div>

            <div className="linksAndMode-container" onClick={changeMode}>
                modo-nocturno
            </div>
        </nav>
    )
} 

export default NavSearch;