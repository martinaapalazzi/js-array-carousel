
const imgList = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];


const imgContainer = document.querySelector (".img-container")
console.log (imgContainer)

let currentSlideIndex = 0;
console.log (currentSlideIndex);

for ( let i = 0; i < imgList.length; i++) {
    console.log (imgList[i]);

    imgContainer.innerHTML +=
        `<div class= "item">
            <img src="${imgList[i]}" alt="">
        </div>`;
    console.log (imgContainer);

};

let displayPics = document.getElementsByClassName("item");
displayPics[currentSlideIndex].classList.add("activate");
console.log (displayPics);

const buttonDown = document.querySelector (".button-down");
console.log (buttonDown);
buttonDown.addEventListener ("click", goToNextSlide);

let autoplayInterval = setInterval(goToNextSlide, 2000);

const stopAutoplay = document.getElementById("stop-autoplay");

stopAutoplay.addEventListener('click', function(){
    if (autoplayInterval == null) {
        autoplayInterval = setInterval(goToNextSlide, 2000);
        stopAutoplay.innerHTML = "ferma autoplay";
    }
    else {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
        stopAutoplay.innerHTML = "riavvia autoplay";
    }
});

const buttonUp = document.querySelector (".button-up");
console.log (buttonUp);
buttonUp.addEventListener ("click", goToPrevSlide);


/* FUNZIONI */

function goToNextSlide() {
    console.log(currentSlideIndex);
    displayPics[currentSlideIndex].classList.remove("activate");
    if (currentSlideIndex < (displayPics.length-1)){
        currentSlideIndex++;
    }
    else {
        currentSlideIndex = 0;
    }
    displayPics[currentSlideIndex].classList.add("activate");
};

function goToPrevSlide() {
    displayPics[currentSlideIndex].classList.remove("activate");
    if (currentSlideIndex > 0 ) {
        currentSlideIndex--;
    }
    else {
        currentSlideIndex = (displayPics.length - 1);
    }
    displayPics[currentSlideIndex].classList.add("activate");
}














/**
 * 1. Crea array
 * 2. Stampa tutti gli elementi con il for
 * 3. Stampa solo quello al currentSlide
 * 4. Al click aumenta o diminuisci currentSlide
 *  5. Controlla che currentSlide >= 0 e <= imgList.length - 1
 *  6. Metti tutte le slide a d-none
 *  7. Metti solo la slide che corriesponde a currentSlideIndex a d-block
 *  8. Cambia il valore di currentSlide se è fuori range in modo che sia corretto
 */


