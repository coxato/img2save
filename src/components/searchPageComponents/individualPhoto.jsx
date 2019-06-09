import React from 'react';
// images
import downloadIcon from '../../images/logo-descarga.png';
// style
import './styles/individualPhoto.css';

// definir ancho de la foto
function widthImageResize(ev){
    let height = ev.target.height;
    if(height >= 480) ev.target.style.width = '270px';
    else ev.target.style.width = '600px';

}

const IndividualPhoto = props => {

    let {urlSmall, urlFull, userFullName, userProfile, description, thisWeb} = props.data;
    let isNightMode = props.isNightMode;
    return(
        <div className="individualPhoto-container">
            <img src={urlSmall} alt={description} onLoad={(ev) => widthImageResize(ev)}/>

            <div className="overlay-image-modal">
                
                <div className="arriba-image-modal">
                    <div className="description-modal">{description}</div>
                    <div className={`btn button-download ${isNightMode ? 'day' : 'night'}`}  title="download" onClick={() => alert(urlFull)}>
                        <img src={downloadIcon} alt="download image2save"/>
                    </div>
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
}

export default IndividualPhoto;