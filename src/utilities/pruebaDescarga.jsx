import React from 'react';
import { saveAs } from 'file-saver';
import llamadaApi from '../api/fetchData';

const URL = 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg'

function onSave(){
    saveAs(URL, 'toto.jpg', { mode: 'cors'});
}

const PruebaDescarga = () => {
    window.descarga = saveAs;
    window.llamada = llamadaApi;
    return(
        <div onClick={onSave}>
            hola
        </div>
    )
}
export default PruebaDescarga;