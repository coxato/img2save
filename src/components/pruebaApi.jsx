import React, { Component } from 'react';
import api from '../api';

import { saveAs } from 'file-saver';


class PruebaApiContainer extends Component{

    state = {
        photos: null
    }
    componentDidMount(){
        api.search.photos('motorcycle',1,15).then( response => response.json())
        .then( json => this.setState({photos: json.results})  );
    }

    handleDownload = (e,url,filename) => {

        saveAs(url, filename+".jpg");
    }

    render(){

        console.log('esto es search ', this.state.photos );
        if(this.state.photos == null ) return <h1>no photos yet</h1>
        return(
            <div id="container-fotos">
                {
                    this.state.photos.map( pic => (
                        <div className="image-container" key={pic.id}>
                            <img src={pic.urls.small} alt={pic.alt_description}/>

                            <p 
                                onClick={(e) => 
                                    this.handleDownload(e , pic.urls.full , pic.description || pic.alt_description ) 
                                    }>descargar!!</p>
                        </div>
                    ))
                
                }
               

            </div>
        )
    }
}

export default PruebaApiContainer;