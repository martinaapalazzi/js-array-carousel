
const imgList = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];

const imgContainer = document.querySelector (".img-container")
console.log (imgContainer)

let currentSlideIndex = 0
console.log (currentSlideIndex)

for ( let i = 0; i < imgList.length; i++) {
    console.log (imgList[i])

    let doView = 'd-none';

    if(currentSlideIndex === i) {
        doView = 'd-block'
    }
    
    imgContainer.innerHTML += `
    <div class="item ${doView}">
        <img src="${imgList[i]}" alt="">
    </div>`

}


const buttonDown = document.querySelector (".button-down")
console.log (buttonDown)
buttonDown.addEventListener ("click", function() {
    currentSlideIndex  
})

const buttonUp = document.querySelector (".button-up")
console.log (buttonUp)
buttonUp.addEventListener ("click", function() {
    if ( I click buttonUp then currentSlideIndex-- ) {

    }
    
})










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



/*imgContainer.innerHTML = ( `
    <div class="item active-item">
        <img src="01.webp" alt="">
    </div>
    <div class="item unactive-item">
        <img src="02.webp" alt="">
    </div>
    <div class="item unactive-item">
        <img src="03.webp" alt="">
    </div>
    <div class="item unactive-item">
        <img src="04.webp" alt="">
    </div>
    <div class="item unactive-item">
        <img src="05.webp" alt="">
    </div>
    `
)*/ 