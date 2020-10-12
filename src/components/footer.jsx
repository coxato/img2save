import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/themeColor';
// styles
import './styles/footer.css';
// images
import LogoBlanco from '../images/logo.png';
import LogoNegro from '../images/logo-negro.png'
import githubLogoBlanco from '../images/github-logo.png';
import githubLogoNegro from '../images/logo-negro-github.png';


const colors = {
    backgroundArriba: { light: '#f1f1f2', dark: '#000' },
    backgroundAbajo: { light: '#17c7eb', dark: '#b024ef' },
    fontColor: { light: '#000', dark: '#fff' },
    githubLogo: { light: githubLogoNegro, dark: githubLogoBlanco},
    logo: { light: LogoNegro, dark: LogoBlanco}
}

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return(
        <div className="footer-container">
            {/************* parte de arriba en el footer*************/}
            <div className="arriba-footer" style={{ background: colors.backgroundArriba[theme], color: colors.fontColor[theme]}}>
                
                {/************* arriba y a la izquierda en el footer*************/}
                <div className="arriba-footer-izquierda">
                    <div className="logo-footer">
                        <img src={colors.logo[theme]} alt="img2save"/>
                    </div>
                    <div className="website-name">
                        <p className="font-small family-verdana">img2save &#169; {new Date().getFullYear()}</p>
                    </div>
                </div>
                
                {/************* arriba y a la derecha en el footer*************/}
                <div className="arriba-footer-derecha">
                    <Link to="/about" className={`decoration-none ${colors.fontColor[theme]}`}>
                        <p className="font-small" alt="about img2save">about this website</p>
                    </Link>
                    <p className="font-small">Logo made with <a href="https://www.designevo.com/en/" target="_blank" rel="noopener noreferrer" title="Free Online Logo Maker">DesignEvo</a></p>
                    <p className="font-small">Icons made by <a href="https://www.flaticon.com/" title="Flaticon" target="_blank"rel="noopener noreferrer">flaticon</a></p>
                </div>
            </div>

            
            
            {/************* parte de abajo en el footer*************/}
            <div className="abajo-footer" style={{ background: colors.backgroundAbajo[theme]}}>
                <div className="personal-links-footer">
                    <p className="family-courier color-white font-small">Carlos Martínez</p>
                    <a href="https://github.com/carlosEdua/img2save" target="_blank"rel="noopener noreferrer">
                        <img src={colors.githubLogo[theme]} alt="github img2save"/>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer;
