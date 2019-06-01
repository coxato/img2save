import React from 'react';
// components
import Loader from './loader';
import ImageContainer from './imageContainer';
// styles
//import './styles/backgroundHome.css'
import './styles/background.css';

const Background = props => {
    let { loading , error , fotos } = props;
    if(loading) return <Loader isNightMode={false} />
    if(error) return <h1>{error.message}</h1>
    
    return (
    <section className="gallery" id="gallery">
        { fotos.map( foto => (
            <div className="grid-masonry-item" key={foto.id.toString()}>
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
    )
};

export default Background;