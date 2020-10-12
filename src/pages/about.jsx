import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeColor';
import {Link} from 'react-router-dom';
// components
import NavLayout from '../components/navLayout';
import About from '../components/aboutPageComponents/about';
import Footer from '../components/footer';
// style
import './styles/aboutPage.css';

const colors = {
    light: 'color-black',
    dark: 'color-white'
}

function AboutPage(){ 
    const { theme } = useContext(ThemeContext);

    return(
        <section className="about-page-container">
            <NavLayout>
                <div className="font-normal family-helvetica about-nav-links">
                    <Link to="/about" className="decoration-none"><p className={`${colors[theme]}`}>about</p></Link>
                    <Link to="/search" className="decoration-none"><p className={`${colors[theme]}`}>search</p></Link>
                </div>
            </NavLayout>

            <About />

            <Footer />
        </section>
    )
}

export default AboutPage;