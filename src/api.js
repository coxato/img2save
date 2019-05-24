// ============== unsplash api ===============
import Unsplash from 'unsplash-js';
const accessKey = "137dd5a7343ad1e840c4fedc27532a3eef0ef45b65ab6313bbc5764ea4c0b582";
const secretKey = "fdd71394cdcfda041db158f1ce0a2d95f0558dac0bc5655085a845adb2a3f952";


const unsplash = new Unsplash({
    applicationId: accessKey,
    secret: secretKey
})

// fetch data from unsplash and transform in a specific json format
async function fetchUnsplashData(word, startPage, per_page){
    try {
        let response =  await unsplash.search.photos(word, startPage, per_page);
        let data = await response.json();
        // save the photos 
        let arrayData = data.results.map( pic => {
            // standard json for use
            return {
                id: pic.id,
                description: pic.description || pic.alt_description,
                user: pic.user.name,
                userProfile: pic.user.links.html,
                fullImage: pic.urls.full,
                smallImage: pic.urls.small,
                thisWeb: 'unsplash'
            }
        } )
        // return the array with the photos data
        return arrayData;
         
    } catch (err) {
        console.log(err)
        return null;
    }
}


// ============= pixabay api ==================
const pixabayKey = "12520812-7a40d4649cbc40da8e7856f3c";
const BASE_URL = "https://pixabay.com/api/?key=";

// fetch data from pixabay and transform in a specific json format
async function pixabayData(keywords,page = 1 , per_page = 10){
  try {
    
    let response = await fetch(`${BASE_URL}${pixabayKey}&q=${encodeURIComponent(keywords)}&page=${page}&per_page=${per_page}`);
    let data = await response.json();
    let arrayDataPixabay = data.hits.map( pic => {
        return {
            id: pic.id,
            description: pic.tags.replace(/,/g, ' '),
            user: pic.user,
            userProfile: `https://pixabay.com/users/${pic.user.toLowerCase()}-${pic.user_id}/`,
            fullImage: pic.largeImageURL,
            smallImage: pic.webformatURL,
            thisWeb: 'pixabay'
        }
    })
    // return the data in a standard array[jsons,...] to use later
    return arrayDataPixabay;

  }
  
  catch (error) {
    console.log(error)
    return null;
  } 
}

const API = {
    unsplashSearch: (word, page, per_page ) => (
        fetchUnsplashData(word, page, per_page)
    ),
    pixabaySearch: (word, page, per_page ) => (
        pixabayData(word, page, per_page)
    )
}



export default API;