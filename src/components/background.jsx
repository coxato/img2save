import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeColor'
// components
import Loader from './loader';
import ImageContainer from './imageContainer';
import Pagination from './searchPageComponents/pagination';
// styles
import './styles/background.css';

const colors = {
    backgroundColor: {
        light: '#fff',
        dark: '#2a3132'
    },
    fontColor: {
        light: '#000',
        dark: '#fff'
    }
}

const Background = props => {
        const { theme } = useContext(ThemeContext);

        let { loading , error , photos, modalShow, modalDownloadShow } = props;
        let NoPadding = props.homePagePadding ? '0px' : '40px'; 
        // Loader animation
        if(loading) return <Loader />
        // error message
        if(error) return <h1>{error.message}</h1>
        // if the array fots is void
        if(photos.length === 0){
            return(
                <div className="fotos-vacio" style={{background: colors.backgroundColor[theme], color: colors.fontColor[theme]}}>
                    <h1 className="font-big">You haven't looked for wallpapers yet</h1>
                    <p className="font-normal">Do a search in the search bar</p>
                </div>
            )
        }  
        return (
            <section>
                <div className="gallery" id="gallery" style={{background: colors.backgroundColor[theme], padding: NoPadding}}>
                    { photos.map( pic => (
                        <div className="grid-masonry-item" key={pic.id.toString()}>
                            <ImageContainer  
                                urlFull={pic.fullImage}
                                urlSmall={pic.smallImage}
                                userFullName={pic.user}
                                userProfile={pic.userProfile}
                                description={pic.description}
                                thisWeb={pic.thisWeb}
                                modalShow={modalShow}
                                modalDownloadShow={modalDownloadShow}
                                dimensions={pic.dimensions}
                            />
                        </div>
                    ))}
                </div>

                <Pagination {...props.paginationProps}/>

            </section>
        )
};

export default Background;