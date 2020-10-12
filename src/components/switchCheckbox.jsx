import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeColor';
import './styles/switchCheckbox.css';
import Moon from '../images/moon.svg'


const SwitchCheckbox = () => {
    const { changeTheme, theme } = useContext(ThemeContext);

    return(
        <div className="switchCheckbox-container">
            <input 
                type="checkbox" 
                onClick={changeTheme} 
                className="checkboxSwitch" 
                defaultChecked={ theme === 'dark' }
            />
            <div className="img-moon-container">
                <img src={Moon} alt="imagen-to-save-nocturno" className="moon"/>
            </div>
        </div>
    )
}

export default SwitchCheckbox;