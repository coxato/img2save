// para hacer el mansory layout se puede aprovechar la propiedad
// <<grid-auto-rows>> que posee css-grid la cual le pone
// filas(rows) automaticas al grid-container, tantas como sea
// necesario. Para hacer que cada elemento hijo del grid
// (grid-items) tenga un tamaño determinado se debe ir iterando
// por cada uno de ellos para asignarle un nuevo valor  a su grid-row-end
// propiedad la cual determina donde empieza y donde termina ese
// hijo.
// asi que lo que debemos modificar es esto:
// myGridItem.style.gridRowEnd = "span "+ rowSpan;
// <<rowSpan>> sería el valor que buscamos , y se calcula de la
// siguiente manera:
// ( altoDelContenidoDelGridItem + altoDelGap ) / ( gridAutoRowsDelGridContainer + altoDelGap )
// la formula lo que calcula  es cuantos grid-auto-rows necesitará
// ejemplo:
// gridAutoRowsDelGridContainer 10px
// altoDelContenidoDelGridItem 95px
// altoDelGap 15px
// cantidadDeAutoRowsNecesarias = ( 85px + 15px ) / ( 10px + 15px )
// NOTA: el grid-gap es muy importante sumarlo porque debemos recordar
// que hay muuuchas filas gracias al grid-auto-rows y cada una de ellas
// posee grid-gap, por ello es importante sumarle el mismo en la formula

function resizeItem(item, gridAutoRowsHeigt, gridGapHeigt){
    /// alto del contenido del item
    let itemHeight = parseInt( item.querySelector('.image-container').getBoundingClientRect().height) ;
    let rowSpanNecesario = Math.ceil( (itemHeight + gridGapHeigt) / (gridAutoRowsHeigt + gridGapHeigt ) );
    item.style.gridRowEnd = "span " + rowSpanNecesario;
    
}

function getAllGridItems(){
    let gridContainer = document.querySelector('#gallery');
    if(!gridContainer) {
        return console.log('aun no ')
    };
    let gridContainerStyles = window.getComputedStyle(gridContainer),
    gridAutoRowsHeigt = parseInt( gridContainerStyles.gridAutoRows ),
    gridGapHeigt = parseInt( gridContainerStyles.gridRowGap );
    let items = gridContainer.querySelectorAll('.grid-masonry-item');
    items.forEach( elmt => resizeItem(elmt, gridAutoRowsHeigt, gridGapHeigt) );
}

export default getAllGridItems;