export default function masonryLayout(containerElem, itemsElems, columns){
    // añadirle las clases masonry-layout y columns-"numero"
    // que quedaría <div class="masonry-layout columns-3 "></div>
    // y se llamaría con css .masonry-layout.columns-3{...}
    containerElem.classList.add('masonry-layout', `columns-${columns}`)
    let columnsElements = []
    // crear e insertar las columnas a el gridContainer
    for( let i = 1; i <= columns; i++){
      let column = document.createElement('div')
      column.classList.add('masonry-column', `column-${i}`)
      containerElem.appendChild(column)
      columnsElements.push(column)
    }
    
    // agregar una por una las imagenes a su respectiva columna
    for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++){
      for(let n = 0; n < columns; n++){
        let item = itemsElems[ m * columns + n]
        if(item){
          columnsElements[n].append(item)
          item.classList.add('masonry-item')
        }
      }
    }
  }