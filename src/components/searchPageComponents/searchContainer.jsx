import React, { Component } from 'react';
// components 
import NavSearch from './navSearch';
import DefaultCategories from './defaultCategories';
import BackgroundPhotos from '../background';
import Footer from '../footer';
import Modal from '../portalModal';
import IndividualPhoto from './individualPhoto';
import DownloadingModal from '../downloadingModal';
// utiities
import masonry2 from '../../utilities/masonry2';
// fetchData 
import fetchPics from '../../api/fetchData';
// styles
import './styles/searchContainer.css';
 
class SearchContainer extends Component{

    state = {
        loading: false,
        error: null,
        photos: [],
        isNightMode: false,
        word: '',
        page: 1,
        perPage: 10,
        modalIsVisible: false,
        modalPhotoData: {},
        modalDownloadIsVisible: false,
        modalDownloadData: {}
    }

    // cantidad de cajas con numeros de las páginas [1][2][3]...99
    nBoxesPagination = 5;
    // numero maxnimo de paginas
    maxPage =  50;

    // ********************************  PAGINACIÓN  ****************************
    susPage = () => { 
        if(this.state.page > 1) { 
            let { word, page, perPage } = this.state;
            this.fetchData(word, page - 1, perPage);
        }
    }

    sumarPage = () => { 
        if(this.state.page < this.maxPage - this.nBoxesPagination + 1){
            let { word, page, perPage } = this.state;
            this.fetchData(word, page + 1, perPage);
        }
    }

    searchByPage = (ev, pageNumber) => {
        let { word, perPage } = this.state;
        this.fetchData(word, pageNumber, perPage);
    }
    // ********************************  MODAL PARA FOTOS  ********************************
    onModalShow = (e, photoProps) => {
        if(e.target.className === "overlay-image" || e.target.className === "img-overlay-download"){
            this.setState({ modalIsVisible: true, 
                modalPhotoData: {
                    ...photoProps
            }
        });
        }
    }

    // cerrar modal
    onModalClose = (e, closeWithCallback = null) => {
        // cerrar si se terminó la descarga
        if(closeWithCallback){
            this.setState({ modalIsVisible: false});
        }
        // si se cierra con el boton X de cerrar o dandole click por fuera del container
        else if( e.target.className === 'modal-container' || e.target.className === 'close-button-modal'){
            this.setState({ modalIsVisible: false});
        }
    }
    //*************************** MODAL PARA DESCARGAS ************************* */
    // controlar modal que muestra el mensaje de descarga
    onModalDownloadShow = (ev, urlPhoto, description) => {
        this.setState({
            modalDownloadIsVisible: true,
            modalDownloadData: { urlPhoto: urlPhoto, description: description}
        });
    }

    onModalDownloadClose = () => this.setState({ modalDownloadIsVisible: false});

    // ****************************  ENCENDER Y APAGAR MODO NOCTURNO  *****************
    // encender y apagar modo nocturno
    onModeChange = () => this.setState({isNightMode: !this.state.isNightMode});

    // *********************** BUSQUEDAS CON LA BARRA DE BUSQUEDAS  ********************
    // manejar la llamada de datos desde el input de <NavSearch>
    onSearch = ev => {
        if(ev.key === "Enter"){
            let value = ev.target.value;
            ev.target.value = "";
            this.fetchData(value);
        }
    }

    // manejar el click del icono buscar y tambien el click de las categorías
    onClickSearh = () => {
        let input = document.getElementById('inputSearch'),
        value = input.value;
        input.value = ""; // resetear valor
        this.fetchData(value);  
    }

    // ******************** BUSCAR POR CATEGORIAS POR DEFECTO  ********************
    // manejar el click de las categorias opr defecto
    onHandleCategoryClick = (ev) => this.fetchData(ev.target.innerText);


    // ************************ TRAER DATOS (FOTOS)  ******************************
    // traer todas las fotos con ayuda de las API's
    fetchData = async (word2search, page = 1, perPage = 30) => {
        window.doMasonryLayout = true;
        this.setState({ loading: true, error: null, page: page, word: word2search});
            // intentar traer las fotos
            try{
                let pics = await fetchPics(word2search, page, perPage );
                this.setState(
                    {photos: pics, loading: false}
                )
                // no hacer más el masonryLayout una vez las imagenes esten arregladas
                window.doMasonryLayout = false;
            }catch(err){
                this.setState({error: err});
            }
        
    }

    // ***********************  INTERACTUAR CON EL DOM Y HACER MASONRY LAYOUT   *******************
    // hacer el masonry layout
   componentDidUpdate(){
            if(window.doMasonryLayout){
                let gridContainer = document.getElementById('gallery');
                let gridItems = document.querySelectorAll('.grid-masonry-item');
                if(gridContainer){
                    let gridContainerWith = parseInt(gridContainer.getBoundingClientRect().width);
                    let columns;
                    // definir cantidad de columnas segun el ancho del gridContainer
                    if(gridContainerWith <= 420) columns = 1;
                    else if(gridContainerWith <= 801) columns = 2;
                    else if(gridContainerWith <= 1025) columns = 3
                    else columns = 4;
                    masonry2(gridContainer, gridItems, columns);
                }
            }
    }

    // *************************  RENDER  ***************************************
    render(){
        let { isNightMode, loading, error, photos } = this.state;
        let propsForPagination = {
            sumarPage: this.sumarPage, susPage: this.susPage, page: this.state.page,
            nBoxes: this.nBoxesPagination, searchByPage: this.searchByPage, maxPage: this.maxPage
        }
        let backgroundColorDefaultContainer = isNightMode ? '#b024ef' : '#17c7eb';
        return (
            <section className="search-container">
                <NavSearch 
                    isNightMode={isNightMode}
                    onSearch={this.onSearch}
                    clickSearch={this.onClickSearh}
                    changeMode={this.onModeChange}
                />

                <div className="default-categories-search-container"  
                    style={{background: backgroundColorDefaultContainer}}>
                    
                    <DefaultCategories 
                        handleCategoryClick={this.onHandleCategoryClick}
                        isNightMode={isNightMode}    
                    />
                </div>

                <div className="background-container-search">
                    <BackgroundPhotos 
                        isNightMode={isNightMode}
                        loading={loading}
                        error={error}
                        photos={photos}
                        modalShow={this.onModalShow}
                        paginationProps={propsForPagination}
                        modalDownloadShow={this.onModalDownloadShow}
                    />
                </div>


                <Footer isNightMode={isNightMode} />
                       
                <Modal modalIsVisible={this.state.modalIsVisible} onModalClose={this.onModalClose}>
                    <IndividualPhoto 
                        isNightMode={isNightMode} 
                        data={this.state.modalPhotoData} 
                        modalDownloadShow={this.onModalDownloadShow}
                    />
                </Modal>

                <DownloadingModal 
                    isVisible={this.state.modalDownloadIsVisible}
                    closeModalDownloading={this.onModalDownloadClose}
                    closeModal={this.onModalClose} 
                    photoData={this.state.modalDownloadData} 
                    isNightMode={isNightMode}
                />
            
            </section>
        )
    }
}

export default SearchContainer;