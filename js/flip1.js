let isCardFlipped = false;

//https://w3bits.com/css-flip-animation/
let cardElements = document.querySelectorAll('.card');
Array.from(cardElements).forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('flippedCard');
    })
})

//Fisher-Yates Shuffle algoritm
//https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1
function shuffle(array) {
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

const sampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sampleArray)
console.log(shuffle(sampleArray));