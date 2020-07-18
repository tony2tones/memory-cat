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
            img: 'images/blackCat.png'
        },
        {
            name: 'blackCat',
            img: 'images/blackCat.png'
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
            name: 'brownCat',
            img: 'images/brownCat.png'
        },
        {
            name: 'brownCat',
            img: 'images/brownCat.png'
        },
        {
            name: 'whiteCatScary',
            img: 'images/whiteCatScary.png'
        },
        {
            name: 'whiteCatScary',
            img: 'images/whiteCatScary.png'
        }
    ]

    
    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    grid.style.align-items = "center";
    const resultDisplayed = document.querySelector('#result')
    var cardsChosen = window.cardsChosen || []
    var cardsChosenId = window.cardsChosen || []
    var cardsWon = window.cardsWon || []
    
    // create your board
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.style.height = "100px"
            card.style.width = "100px"
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/whiteCat.png')
            cards[optionTwoId].setAttribute('src', 'images/whiteCat.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplayed.textContent = cardsWon.length
        if (cardsWon.length === cardsArray.length/2) {
            resultDisplayed.textContent = 'Congratulations! You Found all the matches'
        }
    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        // console.log('DOES THIS ID SHOW id number of image', cardId);
        console.log('DOES THIS ID SHOW? show image link ', cardArray[cardId].img);
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }
    createBoard();
});