document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [{
            name: 'cat1',
            img: 'images/cat1'
        },
        {
            name: 'cat1',
            img: 'images/cat1'
        },
        {
            name: 'cat2',
            img: 'images/cat2'
        },
        {
            name: 'cat2',
            img: 'images/cat2'
        },
        {
            name: 'cat3',
            img: 'images/cat3'
        },
        {
            name: 'cat3',
            img: 'images/cat3'
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
        const optionsTwoId = cardsChosenId[1];
        if (cardsChosenId[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionsTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push

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