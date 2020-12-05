let isCardFlipped = false;

//https://w3bits.com/css-flip-animation/
let cardElements = document.querySelectorAll('.card');
Array.from(cardElements).forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('card-open');
    })
})  
