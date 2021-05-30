const PROJECT_CAROUSEL = document.getElementById("projects_carrousel")
const CAROUSEL_CONTAINER = document.getElementById("carrousel_container")
const CAROUSEL_CARD = document.getElementsByClassName("carrousel_item")
const LEFT_ARROW = document.getElementById("left-arrow")
const RIGHT_ARROW = document.getElementById("right-arrow")
let scroll = 0, numberOfCard = 1

RIGHT_ARROW.addEventListener("click", () => {
    numberOfCard++

    scroll += PROJECT_CAROUSEL.scrollWidth / CAROUSEL_CARD.length
    PROJECT_CAROUSEL.scroll(scroll, 0)

    if(numberOfCard > 1){
        LEFT_ARROW.style.display = "initial"
    }

    if(numberOfCard >= CAROUSEL_CARD.length){
        RIGHT_ARROW.style.display = "none"
    }
})

LEFT_ARROW.addEventListener("click", () => {
    numberOfCard--

    scroll -= PROJECT_CAROUSEL.scrollWidth / CAROUSEL_CARD.length
    PROJECT_CAROUSEL.scroll(scroll, 0)

    if(numberOfCard <= 1){
        LEFT_ARROW.style.display = "none"
    }

    if(numberOfCard === CAROUSEL_CARD.length - 1){
        RIGHT_ARROW.style.display = "initial"
    }
})