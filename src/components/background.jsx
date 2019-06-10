import React from 'react';
// components
import Loader from './loader';
import ImageContainer from './imageContainer';
import Pagination from './searchPageComponents/pagination';
// styles
//import './styles/backgroundHome.css'
import './styles/background.css';

//import masonry2 from '../utilities/masonry2';

//class Background extends React.Component{
const Background = props => {

        let { loading , error , photos, isNightMode, modalShow, modalDownloadShow } = props;
        let backgroundColor = isNightMode ? '#2a3132' : '#ffffff';
        let NoPadding = props.homePagePadding ? '0px' : '40px'; 
        // Loader animation
        if(loading) return <Loader isNightMode={isNightMode} />
        // error message
        if(error) return <h1>{error.message}</h1>
        // if the array fots is void
        if(photos.length === 0){
            return(
                <div className="fotos-vacio" style={{background: backgroundColor}}>
                    <h1 className="font-big">no has buscado fotos aún</h1>
                    <p className="font-normal">realiza una busqueda arriba en la barra de busquedas</p>
                </div>
            )
        }  
        return (
            <section>
                <div className="gallery" id="gallery" style={{background: backgroundColor, padding: NoPadding}}>
                    { photos.map( pic => (
                        <div className="grid-masonry-item" key={pic.id.toString()}>
                            <ImageContainer  
                                urlFull={pic.fullImage}
                                urlSmall={pic.smallImage}
                                userFullName={pic.user}
                                userProfile={pic.userProfile}
                                description={pic.description}
                                thisWeb={pic.thisWeb}
                                isNightMode={isNightMode}
                                modalShow={modalShow}
                                modalDownloadShow={modalDownloadShow}
                            />
                        </div>
                    ))}
                </div>

                <Pagination {...props.paginationProps} isNightMode={isNightMode}/>

            </section>
        )
};

export default Background;