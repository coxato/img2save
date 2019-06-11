import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// components
import NavLayout from '../components/navLayout';
import About from '../components/aboutPageComponents/about';
import Footer from '../components/footer';
// style
import './styles/aboutPage.css';

class AboutPage extends Component{ 

    state = {
        isNightMode: false
    }
    // change to nightMode and viceverse
    onChangeMode = () => this.setState({ isNightMode: !this.state.isNightMode})
    
    render(){ 
        let {isNightMode} = this.state;
        
        return(
            <section className="about-page-container">
                <NavLayout changeMode={this.onChangeMode} isNightMode={isNightMode}>
                    <div className="font-normal family-helvetica about-nav-links">
                        <Link to="/about" className="decoration-none"><p className={`${isNightMode ? 'color-white' : 'color-black'}`}>about</p></Link>
                        <Link to="/search" className="decoration-none"><p className={`${isNightMode ? 'color-white' : 'color-black'}`}>search</p></Link>
                    </div>
                </NavLayout>

                <About isNightMode={isNightMode} />

                <Footer isNightMode={isNightMode} />
            </section>
        )
    }
}

export default AboutPage;