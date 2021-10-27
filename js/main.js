/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

//1. DOM refs 
//1.1. refs to inner dinamic HTML
const images = document.querySelector('.images');
const thumbs = document.querySelector('.thumbs');
//const prev = document.querySelector('.prev');
//const next = document.querySelector('.next');

//1.2. refs for active
let activeImage = 1;

for (let i = 0; i < imageCollection.length; i++) {
    //2. add html div.images > image-container
    images.innerHTML += `
    <div class="image-container">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
        <div class="text">
            <h3>${titleCollection[i]}</h3>
            <p>${textCollection[i]}</p>
        </div>
    </div>`;

    //3. add html div.thumbs > thumb
    thumbs.innerHTML += `
    <div class="thumb">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    </div>`;

}

//4. set active image and active thumb
document.getElementsByClassName('image-container')[activeImage].classList.add('active');
document.getElementsByClassName('thumb')[activeImage].classList.add('active');

//5. add click event on next button --> class active
const next = document.querySelector('.next');
next.addEventListener('click', function() {
    if (activeImage === imageCollection.lenght - 1) {
        activeImage = 0;
    } else {
        activeImage++;
    }
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');
    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeImage].classList.add('active');
})

//6. add click event on prev button --> class active
const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
    if(activeImage === 0) {
        activeImage = imageCollection.lenght - 1;
    } else {
        activeImage--;
    }
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');
    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeImage].classList.add('active');
})




