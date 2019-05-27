import React from 'react';
import ImageContainer from './imageContainer';
// styles
import './styles/backgroundHome.css';

const Background = props => {
    let { loading , error , fotos } = props;
    if(loading) return <h1>LOADING...</h1>
    if(error) return <h1>{error.message}</h1>
    
    return (
    <section className="background-grid-container" id="background-grid-container">
        { fotos.map( foto => (
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
    )
};

export default Background;