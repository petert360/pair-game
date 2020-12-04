/*let cardElements = document.querySelectorAll('.card__element');
for (let i = 0; i < cardElements.length; i += 1) {
    cardElements[i].addEventListener('click', function (event) {
        cardElements.classList.add('.blueBorder');
    })
    
}*/

function changeBorder(event) {
    //cardElement.className = 'card__element blueBorder';
    cardElement.classList.toggle('blueBorder')
}

let cardElement = document.querySelector('.card__element');
cardElement.addEventListener('click', changeBorder)

