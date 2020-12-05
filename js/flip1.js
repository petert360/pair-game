// Animáció leírása:
// https://w3bits.com/css-flip-animation/


let isCardFlipped = false;


let cardElements = document.querySelectorAll('.card');

Array.from(cardElements).forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('flippedCard');
    })
})

//Fisher-Yates Shuffle algorithm
//https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1
function shuffleFisherYates(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

//Másik megoldás a keverésre:
//https://marina-ferreira.github.io/tutorials/js/memory-game/
//When display: flex is declared on the container, flex-items are arranged by the following hierarchy: group and source order. Each group is defined by the order property, which holds a positive or negative integer. By default, each flex-item has its order property set to 0, which means they all belong to the same group and will be laid out by source order. If there is more than one group, elements are firstly arranged by ascending group order.
//There is 10 cards in the game, so we will iterate through them, generate a random number between 0 and 9 and assign it to the flex-item order property:

(function shuffleByFlexOrder() {
    cardElements.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 10);
        card.style.order = ramdomPos;
    });
})();