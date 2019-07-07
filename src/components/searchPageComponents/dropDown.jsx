import React from 'react';
import LogoDownload from '../../images/logo-descarga.png';
import './styles/dropDownDownload.css';

const DropDownDownload = props => {
    const { isNightMode, dimensions, modalDownloadShow, description } = props;

    return(
        <div className={`dropdown-container ${isNightMode ? 'dia' : 'noche'}`}>
            <div className="img-dropdown-container">
                <img className="dropdown-img" src={LogoDownload} alt="img2save download"/>
            </div>
            <select className={`select-resolutions ${isNightMode ? 'dia' : 'noche'}`}  defaultValue="default" onChange={(ev) => modalDownloadShow(ev, ev.target.value, description)}>
                <option value="default" disabled hidden>select resolution</option>
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

export default DropDownDownload;