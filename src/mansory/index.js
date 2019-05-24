function resizeGridItem(item){
  // contenedor grid
  let grid = document.getElementById('grid');
  // obtener alto de las rows contenedor grid
  let rowHeight = parseInt( window.getComputedStyle(grid).gridAutoRows );
  // obtener tamaño de la separacion gap 
  let rowGap = parseInt( window.getComputedStyle(grid).gridRowGap);
  // calcular el span <integer> para la propiedad css grid-row-end del item
  let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  // ajustar el grid-row-end del item con span  
  item.style.gridRowEnd = "span "+rowSpan;

}

// ir ajustando los elementos uno a uno
function resizeAllGridItems(){
  let allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}
/*
function resizeInstance(instance){
	let item = instance.elements[0];
  resizeGridItem(item);
}
*/

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);
/*
allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}
*/