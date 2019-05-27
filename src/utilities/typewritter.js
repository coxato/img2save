export default function typeWritter(words, elmt, time = 500){

  let isDeleting = false, index = 0, word;
  // txt = texto que se irá copiando de letra en letra
  let txt = '', length = words.length; 
  // función que será recursiva gracais a un setTimeout interno
  function write(){
    index = index % length;
    word = words[index];
    // si va borrando, borra palabras
    if(isDeleting){
      time = 250;
      txt = word.substring(0, txt.length - 1);
    }
    // si no va borrando, agrega palabras
    else{
      txt = word.substring(0, txt.length + 1);
    }
    // escribir palabra en el elemento
    elmt.innerText = txt;
    // si se completó la palabra
    if(elmt.innerText === word ){
      isDeleting = true;
      // dejar mas o menos tiempo dependiendo del largo de la palabra
      time = word.length >= 7 ? 8000 : 12000; 
    }
    // si ya se borró toda la palabra, cambiar a la proxima y isDeleting=false
    if(txt === '') {
      index++;
      isDeleting = false;
      time = 500;
    }
    // setTimeout, que a diferencia de setInterval si permite jugar con el tiempo
    setTimeout( () => write() , time);
  }
  // primer llamado a write(), que luego será recursivo gracias a setTimeout a su interno
  write();

}