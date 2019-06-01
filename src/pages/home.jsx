import React from 'react';
// styles
import './styles/home.css';
// components
import BackgroundHome from '../components/homeComponents/backgroundHome';
import TitlePage from '../components/homeComponents/titlePage';

const Home = () => (
    <section className="home-container">
        < TitlePage />
        < BackgroundHome />
    </section>
)


export default Home;