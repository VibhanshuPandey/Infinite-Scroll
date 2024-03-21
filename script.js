const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// elements for links & photos
function dispayPhotos() {
    // function for rach object in photosArray
    photosArray.forEach((photo) => {
        // create <A> to link to unspalsh
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        // put <img> inside <A>, then put both inside imageContainer element

        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}
//UNsplash api
const count = 10;
const apiKey = 'fiHt_dVOLfvgsc0LRIrb0WH4HH4oYob4-MZ3HEitzeQ';
const apiUrl= 'https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}';

// get photos from api
async function getPhotos() {
    try {
        // const response = await fetch(apiUrl);
        // const data = await response.json();
        // console.log(data);
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        dispayPhotos();
    } catch (error) {

    }
}

// on load
getPhotos();
