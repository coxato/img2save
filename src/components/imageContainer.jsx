import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeColor';
// style
import './styles/imageContainer.css'; 
// images
import downloadIcon from '../images/logo-descarga.png';

const colors = {
    light: 'night',
    dark: 'day'
}

const ImageContainer = props => {
    const { theme } = useContext(ThemeContext);
    let {  urlSmall ,userFullName,userProfile, description, thisWeb, modalShow} = props;
    
    return(
        <div className="image-container">
            <img src={urlSmall} alt={description}/>

            <div className="overlay-image" onClick={(e) => modalShow(e, props)}>
                
                <div 
                    className={`btn button-download ${colors[theme]}`}  title="download">
                    <img className="img-overlay-download" src={downloadIcon} alt="download image2save"/>
                </div>

                <div className="credits">
                    <div>
                        <p> photo by 
                            <a href={userProfile} target="_blank"rel="noopener noreferrer"> {userFullName} </a>
                        </p>
                        <p> on 
                            <a  href={`https://${thisWeb}.com`} target="_blank"rel="noopener noreferrer"> {thisWeb}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImageContainer;