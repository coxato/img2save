import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/themeColor';
// components
import SearchInput from './searchInput';
import SwitchCheckbox from '../switchCheckbox';
// logos images
import logoWhite from '../../images/logo.png';
import logoBlack from '../../images/logo-negro.png';
// style
import './styles/navSearch.css';

const themes = {
    logo: { light: logoBlack, dark: logoWhite },
    background: { light: '#f1f1f2', dark: '#000' }
}

const NavSearch = props => {
    const { theme } = useContext(ThemeContext);
    let { clickSearch, onSearch } = props;

    return (
        <nav className="navSearch-container" style={{background: themes.background[theme] }}>
            <Link to="/">
                <div className="image-container">
                    <img src={themes.logo[theme]} alt="img2save"/>
                </div>
            </Link>

            <div className="searchInput-container">
                <SearchInput 
                    onSearch={onSearch} 
                    clickSearch={clickSearch}    
                />
            </div>

            <div className="linksAndMode-container">
                <SwitchCheckbox/>
            </div>
        </nav>
    )
} 

export default NavSearch;