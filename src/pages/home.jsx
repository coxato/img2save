import React, { Component } from 'react';
import API from '../api';
import mansory from '../utilities/mansory';
// components
import Background from '../components/background';


class Home extends Component{
    allFill = false

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

    componentDidMount(){        
        // setInterval para ir mostrando las fotos
        this.intervalId = setInterval(() => {
            // si todas las fotos obtuvieron, para no hacer tantos request
            if(!Object.values(this.state.photos).includes(null)){
                this.allFill = true;
                // aumentar index de la palabra a buscar
                this.setState({
                    backgroundWordCount:
                         (this.state.backgroundWordCount + 1) % this.state.words.length
                        })
            }
            // si no se tienen aun todas las fotos
            if(!this.allFill) this.fecthData();
        }, 7000);
    }
    // limpiar el setInterval
    componentWillUnmount(){
            clearInterval(this.intervalId);
            clearTimeout(this.timeOut);
            window.removeEventListener('resize',this.resize)
    }

    componentDidUpdate(){
        console.log('ya se hizo update del comopnente')
        this.timeOut = setTimeout(() => {
            mansory();
        },500);
       
        this.resize = window.addEventListener("resize", mansory);
    }

    fecthData = async () => {
        console.log('hago request!!!!')
        this.setState({loading: true, error: null });
        let results = []; // aqui se guardarán las fotos
        let arrayUnsplash, arrayPixabay;
        let index = this.state.backgroundWordCount;
        let word2search = this.state.words[index];
        // ***** try catch for call the two API's *****
        try {
            // <<var>> for use out try catch
            arrayUnsplash = await API.unsplashSearch(word2search,1,10);
            arrayPixabay = await API.pixabaySearch(word2search,1,10); 
        } catch (err) {
            console.log(err)
            this.setState({error: err})
        }
        // comprobar que hayan llegado datos de las 2 API's
        if(arrayUnsplash) results = results.concat(arrayUnsplash);
        if(arrayPixabay) results = results.concat(arrayPixabay); 


        // llamar a la función que guardará los datos en el state
        this.savePhotoToState(index, word2search,results);

    }

    // metodo para manejar los datos que hayan llegado
    savePhotoToState = ( index, word , results ) => {
         // indicar por cual index se va
         index++;
         index = index % this.state.words.length;
         // enviar las fotos al estado y el index
         this.setState({
             photos: {
                 ...this.state.photos,
                 [word]: results
             },
             backgroundWordCount: index,
             loading: false
         }) 
    }

    render(){
        let index = this.state.backgroundWordCount , words = this.state.words;
        // por si llego a la ultima palabra del array y se reseteo en cero
        // se regresa a la ultima palabra, solo si index es cero
        let word = index === 0 ? words[words.length - 1] : words[index - 1];

        if(this.state.loading) return <h1>LOADING</h1>
        if(this.state.error) return <h1>{this.state.error.message}</h1>
        return(
            <section className="home-container">
               < Background fotos={this.state.photos[word]}/>
            </section>
        )
    }
}

export default Home;