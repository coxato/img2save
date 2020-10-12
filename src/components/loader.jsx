import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeColor'
// style
import './styles/loader.css';
// colores dependiendo si está en modo nocturno o no
const colors = {
    light: {
        container: '#f1f1f2',
        grande: '#324851',
        mediano: '#375e97',
        pequeno: '#a1d6e2'
    },
    dark: {
        container: '#2a3132',
        grande: '#f1f1f2',
        mediano: '#bcbabe',
        pequeno: '#a1d6e2'
    }
}

const Loader = props => {
    const { theme } = useContext(ThemeContext);
    const {container, grande, mediano, pequeno } = colors[theme];   
    
    return(
        <div className="loader-container" style={{background: container}}>
            <div className="grande" style={{borderColor: grande}}>
                <div className="mediano" style={{borderColor: mediano}}>
                    <div className="pequeno" style={{borderColor: pequeno}}></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;