let cardElements = document.querySelectorAll('.card__element');
let innerElements = document.querySelectorAll('.card__element__inner'); 

for (let i = 0; i < cardElements.length; i += 1) {
    cardElements[i].addEventListener('click', function (event) {
        innerElements.classList.add('.card__element--flipped');
    })
    
}
