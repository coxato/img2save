import React from 'react';
// style
import './styles/imageContainer.css'; 
// images
import downloadIcon from '../images/logo-descarga.png';


const ImageContainer = props => {
    let { urlFull , urlSmall ,userFullName,userProfile, description, thisWeb, isNightMode, modalShow,modalDownloadShow} = props;
    return(
        <div className="image-container">
            <img src={urlSmall} alt={description}/>

            <div className="overlay-image" onClick={(e) => modalShow(e, urlSmall, urlFull, userFullName, userProfile, description, thisWeb)}>
                
                <div 
                    onClick={ev => modalDownloadShow(ev, urlFull, description)}
                    className={`btn button-download ${isNightMode ? 'day' : 'night'}`}  title="download">
                    <img src={downloadIcon} alt="download image2save"/>
                </div>

                <div className="credits">
                    <div>
                        <p> photo by 
                            <a href={userProfile}> {userFullName} </a>
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