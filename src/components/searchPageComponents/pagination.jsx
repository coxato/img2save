import React from 'react'
// style
import './styles/pagination.css'
// images
import Arrow from '../../images/row.svg';

const Pagination = props => {
    console.log('estas son las props que me llegan ', props)
    let boxes = [];
    let {page, maxPage, nBoxes,  susPage, sumarPage, searchByPage, isNightMode} = props;
    // condicional para no pintar cubiculos de más 
    //si maximo son 30 páginas, pintar solo hasta el cubículo 30
    if(page <= maxPage - nBoxes + 1 ){
        for(let i = 0; i < nBoxes; i++){
            boxes.push(
                <div key={page + i} 
                     onClick={(ev) => searchByPage(ev, page + i)}
                    className = {`numberPage-container ${page === page + i ? 'actualPage': ''} ${isNightMode?'actualNight':'actualDay'}`}
                >
                    {page + i}
                </div>
            )    
        }
    }
    // en caso de que el numero de la página interfiera con
    // el numero de cubiculos a pintar 
    else{
        let minCubiculo = maxPage - nBoxes + 1;
        for(let i = minCubiculo; i <= maxPage; i++){
            boxes.push(
                <div key={i} 
                     onClick={(ev) => searchByPage(ev, i)}
                     className = {`numberPage-container ${ i === page ? 'actualPage': ''} ${isNightMode?'actualNight':'actualDay'}`}     
                >
                    {i}
                </div>
            )    
        }
    }
    let backgroundColor = isNightMode ? '#2a3132' : 'white';
    return (
        <div className="boxes-container" style={{background: backgroundColor}}>
            <p className="decoration-underline font-small" onClick={ ev => searchByPage(ev, 1)}>first 1</p>
    
            <img className="arrow-image" src={Arrow} alt="previous page img2save" onClick={susPage} title="previous page" />
                <div className="boxes-page-container">
                    {boxes}
                </div>
            <img className="arrow-image arrow-image-2" src={Arrow} alt="next page img2save" onClick={sumarPage} title="next page" />
            
            <p className="decoration-underline font-small" onClick={ev => searchByPage(ev, maxPage)}>last {maxPage}</p>
        </div>
    )

}


export default Pagination;