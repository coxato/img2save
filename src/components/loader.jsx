import React from 'react';
// style
import './styles/loader.css';
// colores dependiendo si está en modo nocturno o no
const coloresModo = {
    claro: {
        container: '#f1f1f2',
        grande: '#324851',
        mediano: '#375e97',
        pequeno: '#a1d6e2'
    },
    oscuro: {
        container: '#2a3132',
        grande: '#f1f1f2',
        mediano: '#bcbabe',
        pequeno: '#a1d6e2'
    }
}

const Loader = props => {
 let {container, grande, mediano, pequeno } = props.isNightMode ? coloresModo.oscuro : coloresModo.claro;   
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