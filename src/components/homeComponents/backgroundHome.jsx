import React, { Component } from 'react';
import API from '../../api';
// utilities
//import mansory from '../../utilities/mansory';
import masonry2 from '../../utilities/masonry2';
// components
import Background from '../background';
// styles
import './styles/backgroundHomeContainer.css';


class BackgroundHome extends Component{
    
    state = {
        loading: true,
        error: null,
        words: ['landscapes','pets','space','cars','vintage','cities'],
        photos:{
        landscapes: null,
        pets: null,
        space: null,
        cars: null,
        vintage: null,
        cities: null,
    },
        backgroundWordCount: 0,
    }

    // *==*==*==*==*==*==*==*==*==*==* setInterval from the background Home *==*==*==*==*==*==*==*==*==*==*
    componentDidMount(){ 
        // primer llamado que se realiza solo una vez antes del setInterval 
        this.fecthData();     
        // setInterval para ir mostrando las fotos
        this.intervalId = setInterval(() => {
            this.fecthData();
        },10000);
    }

    // *==*==*==*==*==*==*==*==*==*==* fetch all the necesary data(photos) *==*==*==*==*==*==*==*==*==*==*  
    fecthData = async () => {
        this.setState({loading: true, error: null });
        let results = []; // aqui se guardarán las fotos
        let arrayPixabay, arrayFlickr;
        let index = this.state.backgroundWordCount;
        let word2search = this.state.words[index];
        // ***** try catch for call the two API's *****
        try {
            arrayPixabay = await API.pixabaySearch(word2search,1,10);
            arrayFlickr = await API.flickrSearch(word2search,1,10);
        } catch (err) {
            console.log(err)
            this.setState({error: err})
        }
        // comprobar que hayan llegado datos de las 2 API's
        if(arrayPixabay) results = results.concat(arrayPixabay); 
        if(arrayFlickr) results = results.concat(arrayFlickr);

        // llamar a la función que guardará los datos en el state
        this.savePhotoToState(index, word2search,results);

    }

    // *==*==*==*==*==*==*==*==*==*==*  save the data in state *==*==*==*==*==*==*==*==*==*==*
    // metodo para manejar los datos que hayan llegado y guardarlos en el state
    savePhotoToState = ( index, word , results ) => {
         // indicar por cual index se va
         index++;
         index = index % this.state.words.length;
         // enviar las fotos al estado y el index+1
         this.setState({
             photos: {
                 ...this.state.photos,
                 [word]: results
             },
             backgroundWordCount: index,
             loading: false
         }) 
    }

    // *==*==*==*==*==*==*==*==*==*==* manipulate the DOM *==*==*==*==*==*==*==*==*==*==*
    componentDidUpdate(){
        let gridContainer = document.getElementById('gallery');
        let gridItems = document.querySelectorAll('.grid-masonry-item');
        if(gridContainer){
            let gridContainerWith = parseInt(gridContainer.getBoundingClientRect().width);
            let columns;
            // definir cantidad de columnas segun el ancho del gridContainer
            if(gridContainerWith <= 620) columns = 2;
            else if(gridContainerWith <= 1025) columns = 3;
            else columns = 4;

            masonry2(gridContainer, gridItems, columns);
        }
    }

    // *==*==*==*==*==*==*==*==*==*==* clean timers *==*==*==*==*==*==*==*==*==*==*
    // limpiar timers
    componentWillUnmount(){
        clearInterval(this.intervalId);
}

    // *==*==*==*==*==*==*==*==*==*==* render elements *==*==*==*==*==*==*==*==*==*==*
    render(){
        let index = this.state.backgroundWordCount , words = this.state.words;
        // por si llego a la ultima palabra del array y se reseteo en cero
        // se regresa a la ultima palabra, solo si index es cero
        let word = index === 0 ? words[words.length - 1] : words[index - 1];
        return(
            <section>
                <div className="background-container" >
                    <Background
                        loading={this.state.loading}
                        error={this.state.error} 
                        fotos={this.state.photos[word]}
                    />
                </div>
            </section>
        )
    }
}

export default BackgroundHome;