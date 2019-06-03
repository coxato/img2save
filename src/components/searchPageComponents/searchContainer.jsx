import React, { Component } from 'react';
// components 
import NavSearch from './navSearch';
import DefaultCategories from './defaultCategories';
import BackgroundPhotos from '../background';
// utiities
import masonry2 from '../../utilities/masonry2';
// fetchData
import fetchPics from '../../api/fetchData';
// styles
import './styles/searchContainer.css';

class SearchContainer extends Component{

    errorOcurred = false;

    state = {
        loading: false,
        error: null,
        photos: [],
        isNightMode: false,
        word: '',
        page: 1,
        perPage: 10
    }

    // encender y apagar modo nocturno
    onModeChange = () => {
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
    onHandleCategoryClick = (ev) => {
        this.fetchData(ev.target.innerText,1,10);
    }

    // traer todas las fotos con ayuda de las API's
    fetchData = async (word2search, page, perPage) => {
        this.setState({ loading: true, error: null});
            // intentar traer las fotos
            try{
                let pics = await fetchPics(word2search, page, perPage );
             this.setState(
                    {photos: pics, word: word2search, loading: false}
                    )
            }catch(err){
                this.setState({error: err});
            }
        
    }

    // hacer el masonry layout
   componentDidUpdate(){
        if(this.eerrorOcurred) console.log('ERRROOOORRRR')
        else{
            let gridContainer = document.getElementById('gallery');
            let gridItems = document.querySelectorAll('.grid-masonry-item');
            if(gridContainer){
                let gridContainerWith = parseInt(gridContainer.getBoundingClientRect().width);
                let columns;
                // definir cantidad de columnas segun el ancho del gridContainer
                if(gridContainerWith <= 420) columns = 1;
                else if(gridContainerWith <= 700) columns = 2;
                else if(gridContainerWith <= 1025) columns = 3
                else columns = 4;
                masonry2(gridContainer, gridItems, columns);
            }
        }
    }

        
    render(){
        let { isNightMode, loading, error, photos } = this.state;
        let backgroundColor = isNightMode ? '#b024ef' : '#17c7eb';
        return (
            <section className="search-container">
                <NavSearch 
                    isNightMode={isNightMode}
                    onSearch={this.onSearch}
                    clickSearch={this.onClickSearh}
                    changeMode={this.onModeChange}
                />

                <div className="default-categories-search-container"  style={{background: backgroundColor}}>
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
                    />
                </div>
            </section>
        )
    }
}

export default SearchContainer;