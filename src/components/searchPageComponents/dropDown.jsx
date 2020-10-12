import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeColor';
// utils
import { downloadImage } from '../../utilities/downloader';
// images
import LogoDownload from '../../images/logo-descarga.png';
import './styles/dropDownDownload.css';

const classTheme = { light: 'noche', dark: 'dia' };

const DropDownDownload = props => {
    const { theme } = useContext(ThemeContext);
    const { dimensions, description } = props;

    return(
        <div className={`dropdown-container ${classTheme[theme]}`}>
            <div className="img-dropdown-container">
                <img className="dropdown-img" src={LogoDownload} alt="img2save download"/>
            </div>

            <select 
                onChange={(ev) => download(ev.target.value, description) }
                className={`select-resolutions ${classTheme[theme]}`}
                defaultValue="default"
            > 
                <option value="default" disabled hidden>select resolutions</option>
                { showDimensions(dimensions) }
            </select>
        </div>
    )
}

function showDimensions(dimensions){
    let options = [];

    for(let size in dimensions){
        options.push(
            <option key={size} value={dimensions[size]}>
                {size}
            </option>
        )
    }

    return options;
}

function download(imageURL, imageName){
    const extension = imageURL.match(/(jpg)|(png)|(gif)/g);
    downloadImage(imageURL, imageName, extension);
}

export default DropDownDownload;