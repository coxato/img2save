import React, { Component} from 'react';
// components
import Loader from './loader';
// style
import './styles/downloadingModal.css';
// utilities
import { saveAs } from '../utilities/filesaver';

class DownloadingModal extends Component{

    componentDidUpdate(){
        let {  urlPhoto ,description } = this.props.photoData;
        this.descargar(urlPhoto, description, this.props.closeModal);
    }
    descargar = (url, filename, closeModal) => {
        if(url){
            let extension = url.match(/(jpg)|(png)|(gif)/g);
            filename =  filename.substring(0,25) + '.' + extension;
        
            let downloadModalMessageContainer = document.querySelector('.message-downloading');
            if(downloadModalMessageContainer){
                const deleteElementCallback = () => document.querySelector('.downloading-container').removeChild(downloadModalMessageContainer);
                saveAs(url,filename, undefined, () =>{
                    deleteElementCallback(); // borrar contenedor de mensaje
                    closeModal(); // cerrar el modal
                })
            }
        }
    }
    
    render(){
        let { isNightMode, isVisible, photoData: {description} } = this.props;
        let backgroundColor = isNightMode ? '#2a3132' : '#f1f1f2';         
        let fontColor = isNightMode ? '#ffffff' : '#000000';
        if(isVisible){
            description = description.substring(0,10) + '...';

            return (
                <section className="downloading-container">
                    <div className="message-downloading" style={{background: backgroundColor, color: fontColor, borderColor: fontColor}}>
                        <p className="font-small family-helvetica">the image {description} is downloading please wait</p>
                        <div className="loader-downloading-container"><Loader isNightMode={isNightMode}/></div>
                    </div>
                </section>
            )
        }
        else{
            return null;
        }
    }
}


export default DownloadingModal;





