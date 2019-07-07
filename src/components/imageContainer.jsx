import React from 'react';
// style
import './styles/imageContainer.css'; 
// images
import downloadIcon from '../images/logo-descarga.png';


const ImageContainer = props => {
    let {  urlSmall ,userFullName,userProfile, description, thisWeb, isNightMode, modalShow} = props;
    return(
        <div className="image-container">
            <img src={urlSmall} alt={description}/>

            <div className="overlay-image" onClick={(e) => modalShow(e, props)}>
                
                <div 
                    className={`btn button-download ${isNightMode ? 'day' : 'night'}`}  title="download">
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