import React from 'react';
// styles
import './styles/simpleFooter.css';
// images
import Logo from '../images/logo.png'
import githubLogo from '../images/github-logo.png';

const SimpleFooter = () => (
    <div className="footerHome-container">
        <div className="footer-content">
            <div className="logo-footer-home">
                <img src={Logo} alt="img2save"/>
            </div>
            <div className="personal-links">
                <p className="family-courier color-white font-small">Carlos Martínez</p>
                <a href="https://github.com/carlosEdua/img2save" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="github img2save"/>
                </a>
            </div>
        </div>

        <div className="website-name-footer">
            <p className="font-small color-white family-verdana">img2save &#169; {new Date().getFullYear()}</p>
        </div>
    </div>
)

export default SimpleFooter;
