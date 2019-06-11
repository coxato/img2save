import React from 'react';
import { Link } from 'react-router-dom';
// components
import NavHome from '../simpleNav';
import FooterHome from '../simpleFooter';
// style
import './styles/titlePage.css';


const TitlePage = () => (
    <section className="title-page-container">
        <NavHome/>

        <div className="info-title-page">
            <h1 className="family-helvetica font-large ln-height-normal">find your perfect wallpaper</h1>
            <h1 className="family-courier font-big">are you looking for <span id="spanText"></span><span id="lineEditor">|</span>?</h1>
            <div className="effects-button">
            <Link to="/search" className="decoration-none">
                    <div className="searchButton font-normal ln-height-small">
                        <p className="decoration-none">start looking</p>    
                        <div className="overlay-searchButton"></div>
                    </div>
            </Link>
            </div>
        </div>

        <FooterHome />
    </section>
)
/*
ReactDOM.createPortal(
    <section className="title-page-container">
        <h1>are you looking for <span id="spanText"></span>?</h1>
    </section>
, document.getElementById('portalHome'))
*/

export default TitlePage;