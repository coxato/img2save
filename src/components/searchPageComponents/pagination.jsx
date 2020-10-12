import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeColor';
// style
import './styles/pagination.css'
// images
import Arrow from '../../images/row.svg';

const colors = {
    themeClassName: {
        light: 'actualDay',
        dark: 'actualNight'
    },
    backgroundColor: {
        light: '#fff',
        dark: '#2a3132'
    }
}

const Pagination = props => {
    const { theme } = useContext(ThemeContext);
    let boxes = [];
    let {page, maxPage, nBoxes,  susPage, sumarPage, searchByPage} = props;
    // condicional para no pintar cubiculos de más 
    //si maximo son 30 páginas, pintar solo hasta el cubículo 30
    if(page <= maxPage - nBoxes + 1 ){
        for(let i = 0; i < nBoxes; i++){
            boxes.push(
                <div key={page + i} 
                     onClick={(ev) => searchByPage(ev, page + i)}
                    className = {`numberPage-container ${page === page + i ? 'actualPage': ''} ${colors.themeClassName[theme]}`}
                >
                    {page + i}
                </div>
            )    
        }
    }
    // en caso de que el numero de la página interfiera con
    // el numero de cubiculos a pintar 
    else{
        let minimoCubiculo = maxPage - nBoxes + 1;
        for(let i = minimoCubiculo; i <= maxPage; i++){
            boxes.push(
                <div key={i} 
                     onClick={(ev) => searchByPage(ev, i)}
                     className = {`numberPage-container ${ i === page ? 'actualPage': ''} ${colors.themeClassName[theme]}`}     
                >
                    {i}
                </div>
            )    
        }
    }

    return (
        <div className="boxes-container" style={{background: colors.backgroundColor[theme]}}>
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