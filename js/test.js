//https://w3bits.com/css-flip-animation/

let cardElements = document.querySelectorAll('.card__inner');
Array.from(cardElements).forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipCard');
    })
})  
