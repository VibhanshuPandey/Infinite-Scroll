const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// elements for links & photos
function dispayPhotos() {
    // function for rach object in photosArray
    photosArray.forEach((photo) => {});
}
//UNsplash api
const count =10;
const apiKey = 'fiHt_dVOLfvgsc0LRIrb0WH4HH4oYob4-MZ3HEitzeQ';
const apiUrl= 'https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}';

// get photos from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        dispayPhotos ();
    } catch (error) {

    }
}

// on load
getPhotos();
