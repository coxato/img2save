import API from './api';

async function fetchData(word2search, page = 1, perPage = 10){
    
    let results = []; // aqui se guardarán las fotos
    let arrayPixabay, arrayFlickr, arrayUnsplash;
    // ***** try catch for call the three API's *****
    try {

        arrayPixabay = await API.pixabaySearch(word2search, page, perPage);
        arrayFlickr = await API.flickrSearch(word2search ,page, perPage);
        arrayUnsplash = await API.unsplashSearch(word2search ,page, perPage);
    
    } catch (err) {
        console.log(err)
        this.setState({error: err})
    }
    // comprobar que hayan llegado datos de las 2 API's
    if(arrayPixabay) results = results.concat(arrayPixabay); 
    if(arrayFlickr) results = results.concat(arrayFlickr);
    if(arrayUnsplash) results = results.concat(arrayUnsplash);

    results = mezclar(results);
    return results;

}

// función para mezclar los resultados que lleguen
function mezclar(arr){
    let length = arr.length;
    let auxiliar , index ;
    while(length > 0){
      index = Math.floor( Math.random() * length ); 

      length--;

      auxiliar = arr[length]; // ya se le bajó - 1 al lenght
      arr[length] = arr[index];
      arr[index] = auxiliar;
    }

    return arr;
  }

export default fetchData;