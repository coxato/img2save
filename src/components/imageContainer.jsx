import React from 'react';

// style
import './styles/imageContainer.css';

const ImageContainer = props => {
    let { urlFull , urlSmall ,userFullName,userProfile, description, thisWeb } = props;
    return(
        <div className="image-container">
            <img src={urlSmall} alt={description}/>

            <div className="overlay-image">
                <div className="button-download" onClick={() => alert(urlFull)}>download</div>
                <div className="credits">
                    <p> photo by 
                        <a href={userProfile}  >{userFullName} </a>
                        on <a 
                            href={`https://${thisWeb}.com`} 
                            target="_blank"
                            rel="noopener noreferrer">
                                {thisWeb}
                            </a>
                         </p>
                </div>
            </div>
        </div>
    )
};

export default ImageContainer;