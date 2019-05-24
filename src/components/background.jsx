import React from 'react';
import ImageContainer from './imageContainer';
// styles
import './styles/backgroundHome.css';

const Background = props => (
    <section className="background-grid-container">
        { props.fotos.map( foto => (
            <div className="item" key={foto.id.toString()}>
                <ImageContainer  
                    urlFull={foto.fullImage}
                    urlSmall={foto.smallImage}
                    userFullName={foto.user}
                    userProfile={foto.userProfile}
                    description={foto.description}
                    thisWeb={foto.thisWeb}
                />
            </div>
        ))}
    </section>
);

export default Background;