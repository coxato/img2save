import React, { Component } from 'react';
// components 
import NavSearch from './navSearch';
import DefaultCategories from './defaultCategories';
import BackgroundPhotos from '../background';
import Footer from '../footer';
import Modal from '../portalModal';
import IndividualPhoto from './individualPhoto';
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
        modalPhotoData: {}
    }

    // cantidad de cajas con numeros paginadores [1][2][3]...99
    nBoxesPagination = 3;
    // numero maxnimo de paginas
    maxPage =  10;
    // establecer variable global que determina si se debe hacer
    //shuffle de las fotos o no
    componentDidMount(){ window.doMasonryLayout = false}

    // control pagination
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
    // controlar el modal
    onModalShow = (e, urlSmall, urlFull, userFullName, userProfile, description, thisWeb) => {
        window.doMasonryLayout = false;
        if(e.target.className === "overlay-image"){
            this.setState({ modalIsVisible: true, 
                modalPhotoData: {
                    urlSmall: urlSmall,
                    urlFull: urlFull,
                    userFullName: userFullName,
                    userProfile: userProfile, 
                    description: description, 
                    thisWeb: thisWeb
            }
        });
        }
    }

    // cerrar modal
    onModalClose = (e) => {
        window.doMasonryLayout = false;
        if(e.target.className === 'modal-container' || e.target.className === 'close-button-modal'){
            this.setState({ modalIsVisible: false})
        }
    }



    // encender y apagar modo nocturno
    onModeChange = () => {
        // variable global para que no se vuelva a hacer el masonry layout una vez que ya esté pintada 
        window.doMasonryLayout = false; 
        this.setState({isNightMode: !this.state.isNightMode});
    }


    // manejar la llamada de datos desde el input de <NavSearch>
    onSearch = ev => {
        if(ev.key === "Enter"){
            this.fetchData(ev.target.value, 1, 10);
        }
    }


    // manejar el click del icono buscar y tambien el click de las categorías
    onClickSearh = () => {
        let input = document.getElementById('inputSearch');
        this.fetchData(input.value, 1, 10);  
    }


    // manejar el click de las categorias opr defecto
    onHandleCategoryClick = (ev) => this.fetchData(ev.target.innerText,1,10);



    // traer todas las fotos con ayuda de las API's
    fetchData = async (word2search, page, perPage) => {
        window.doMasonryLayout = true;
        this.setState({ loading: true, error: null, page: page, word: word2search});
            // intentar traer las fotos
            try{
                let pics = await fetchPics(word2search, page, perPage );
             this.setState(
                    {photos: pics, loading: false}
                    )
            }catch(err){
                this.setState({error: err});
            }
        
    }


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
                    />
                </div>


                <Footer isNightMode={isNightMode} />
                       
                <Modal modalIsVisible={this.state.modalIsVisible} onModalClose={this.onModalClose}>
                    <IndividualPhoto isNightMode={isNightMode} data={this.state.modalPhotoData}/>
                </Modal>
            </section>
        )
    }
}

export default SearchContainer;