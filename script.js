const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// helper function to set attributes on DOM element
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// elements for links & photos
function displayPhotos() {
    // function for rach object in photosArray
    photosArray.forEach((photo) => {
        // create <A> to link to unspalsh
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // put <img> inside <A>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}
//UNsplash api
const count = 10;
const apiKey = 'fiHt_dVOLfvgsc0LRIrb0WH4HH4oYob4-MZ3HEitzeQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


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

// on load
getPhotos();
