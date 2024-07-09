const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//UNsplash api
const count = 30;
const apiKey = 'fiHt_dVOLfvgsc0LRIrb0WH4HH4oYob4-MZ3HEitzeQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if all images were loaded
function imageLoaded() {
    console.log('image loaded');
    imagesLoaded++;
    console.log(imagesLoaded);
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;        
    }
}

// helper function to set attributes on DOM element
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// elements for links & photos
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;    
    photosArray.forEach((photo) => {
        // create <A> to link to unspalsh
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // create <img> for photo
        const img = document.createElement('img');
        
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // eventlistener, checks when loading finished
        img.addEventListener('load', imageLoaded);
        // put <img> inside <A>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}

// get photos from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// checks if scrolling reached bottom of page, load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();        
    }
});
// on load
getPhotos();
