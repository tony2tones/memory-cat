document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [{
            name: 'colorCat',
            img: 'images/colorCat.png'
        },
        {
            name: 'colorCat',
            img: 'images/colorCat.png'
        },
        {
            name: 'blackCat',
            img: 'images/blackCat'
        },
        {
            name: 'blackCat',
            img: 'images/blackCat'
        },
        {
            name: 'whiteCat',
            img: 'images/whiteCat.png'
        },
        {
            name: 'whiteCat',
            img: 'images/whiteCat.png'
        },
        {
            name: 'cat4',
            img: 'images/cat4'
        },
        {
            name: 'cat4',
            img: 'images/cat4'
        }
    ]

    cardsChosen = [];
    cardChosenId = [];
    cardsWon = [];
    const grid = document.querySelector('.grid');
    const resultDisplayed = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    // create your board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.style.height = "100px";
            card.style.width = "100px";
            card.setAttribute('src', 'images/back.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);

        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosenId[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/whiteCat.png');
            cards[optionTwoId].setAttribute('src', 'images/whiteCat.png');
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.png');
            cards[optionTwoId].setAttribute('src', 'images/back.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplayed.textContent = cardsWon.length
        if (cardsWon.length === cardsArray.length/2) {
            resultDisplayed.textContent = 'Congratulations! You Found all the matches';
        }
    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardChosenId.puah(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }

    }
    createBoard();
});