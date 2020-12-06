// Animáció leírása:
// https://w3bits.com/css-flip-animation/

let isCardFlipped = false;
let firstCard, secondCard;
let lockCards = false;  // a második kártya fordításakor válik igazzá, és megakadályozza, hogy újabb kártyát fordítsunk
let pairsFound = 0;

function checkForMatch(card1, card2) {
    /*  if (card1.dataset.cardset === card2.dataset.cardset) {
              disableCards();
              return;
          }
          unflipCards();
    Ugyanez három operandusos kifejezéssel: 
    */
    let isMatch = card1.dataset.cardset === card2.dataset.cardset;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    pairsFound += 1;
    if (pairsFound === 5) {
        clearInterval(timerInterval);
    }
    resetCards();
}

function unflipCards() {
    lockCards = true;

    setTimeout(() => {
        firstCard.classList.remove('flippedCard');
        secondCard.classList.remove('flippedCard');
        // lockCards = false;
        resetCards();
    }, 1000);
}

function flipCard() {
    if (lockCards) return;
    if (this === firstCard) return;

    if (!stopWatchIsRunning) {
        startStopWatch();
    }

    this.classList.add('flippedCard');
    if (!isCardFlipped) {
        isCardFlipped = true;
        firstCard = this;
        return
    }
    secondCard = this;
    // isCardFlipped = false;
    checkForMatch(firstCard, secondCard);
}

function resetCards() {
    [isCardFlipped, lockCards] = [false, false];
    [firstCard, secondCard] = [null, null];
}

let cardElements = document.querySelectorAll('.card__inner');
Array.from(cardElements).forEach((card) => {
    card.addEventListener('click', flipCard)
})

// Fisher-Yates Shuffle algorithm
// https://medium.com/@joshfoster_14132/best-javascript-shuffle-algorithm-c2c8057a3bc1
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

// Másik megoldás a keverésre:
// https://marina-ferreira.github.io/tutorials/js/memory-game/
// When display: flex is declared on the container, flex-items are arranged by the following hierarchy: group and source order. Each group is defined by the order property, which holds a positive or negative integer. By default, each flex-item has its order property set to 0, which means they all belong to the same group and will be laid out by source order. If there is more than one group, elements are firstly arranged by ascending group order.
//There is 10 cards in the game, so we will iterate through them, generate a random number between 0 and 9 and assign it to the flex-item order property:

let cardsToShuffle = document.querySelectorAll('.card__element');

(function shuffleByFlexOrder() {
    cardsToShuffle.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 10);
        card.style.order = ramdomPos;
    });
})();


// időmérő
// https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}`;
}

let startTime;
let elapsedTime;
let timerInterval;
let stopWatchIsRunning = false;

function startStopWatch() {
    startTime = Date.now();
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.querySelector('.timer').innerHTML = timeToString(elapsedTime);
    }, 1000)
    stopWatchIsRunning = true;
}



