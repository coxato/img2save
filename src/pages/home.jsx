import React from 'react';
// styles
import './styles/home.css';
// components
import BackgroundHome from '../components/backgroundHome';
import TitlePage from '../components/titlePage';

const Home = () => (
    <section className="home-container">
        < TitlePage />
        < BackgroundHome />
    </section>
)


export default Home;