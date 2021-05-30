const PROJECT_CAROUSEL = document.getElementById("projects_carrousel")
const CAROUSEL_CONTAINER = document.getElementById("carrousel_container")
const CAROUSEL_CARD = document.getElementsByClassName("carrousel_item")
const LEFT_ARROW = document.getElementById("left-arrow")
const RIGHT_ARROW = document.getElementById("right-arrow")
const lengthOfMovement = PROJECT_CAROUSEL.scrollWidth * 0.164
let scroll = 0, numberOfCard = 1

RIGHT_ARROW.addEventListener("click", () => {
    numberOfCard++

    scroll += lengthOfMovement
    movement(scroll, "Right")
})

LEFT_ARROW.addEventListener("click", () => {
    numberOfCard--

    scroll -= lengthOfMovement
    movement(scroll, "Left")
})

function movement(flag, direction){
    setTimeout(() => {
        let movementValue

        if(direction === "Right"){
            movementValue = PROJECT_CAROUSEL.scrollLeft += 2

            if(numberOfCard >= CAROUSEL_CARD.length){
                if(movementValue < PROJECT_CAROUSEL.scrollWidth * 0.81408){
                    PROJECT_CAROUSEL.scroll(movementValue, 0)
                    movement(flag, "Right")
                }else{
                    RIGHT_ARROW.style.display = "none"
                }
            }else{
                if(movementValue < flag){
                    PROJECT_CAROUSEL.scroll(movementValue, 0)
                    movement(flag, "Right")
                }else{
                    if(numberOfCard > 1){
                        LEFT_ARROW.style.display = "initial"
                    }
                }
            }
        }else if(direction === "Left"){
            movementValue = PROJECT_CAROUSEL.scrollLeft -= 2

            if(movementValue <= flag){
                if(numberOfCard <= 1){
                    LEFT_ARROW.style.display = "none"
                }
            
                if(numberOfCard === CAROUSEL_CARD.length - 1){
                    RIGHT_ARROW.style.display = "initial"
                }
            }else{
                PROJECT_CAROUSEL.scroll(movementValue, 0)
                movement(flag, "Left")
            }
        }
    }, 0)
}