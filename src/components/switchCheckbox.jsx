import React from 'react';

import './styles/switchCheckbox.css';
import Moon from '../images/moon.svg'

const SwitchCheckbox = props => {
    return(
        <div className="switchCheckbox-container">
            <input type="checkbox" onClick={props.changeMode} className="checkboxSwitch"/>
            <div className="img-moon-container">
                <img src={Moon} alt="imagen-to-save-nocturno" className="moon"/>
            </div>
        </div>
    )
}

export default SwitchCheckbox;