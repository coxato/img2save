import React from 'react';
// components
import DropDownResolutions from './dropDown';
// style
import './styles/individualPhoto.css';

// definir ancho de la foto
function widthImageResize(ev){
    let height = ev.target.height;
    if(height >= 480) ev.target.style.width = '270px';
    else ev.target.style.width = '600px';

}

const IndividualPhoto = props => {

    let {urlSmall, dimensions, userFullName, userProfile, description, thisWeb} = props.data;
    let { isNightMode, modalDownloadShow} = props;
    return(
        <div className="individualPhoto-container">
            <img src={urlSmall} alt={description} onLoad={(ev) => widthImageResize(ev)}/>

            <div className="overlay-image-modal">
                
                <div className="arriba-image-modal">
                    <div className="description-modal">{description}</div>
                    
                    <DropDownResolutions 
                        isNightMode={isNightMode}
                        modalDownloadShow={modalDownloadShow}
                        dimensions={dimensions}
                        description={description}
                    />
                
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
}

export default IndividualPhoto;