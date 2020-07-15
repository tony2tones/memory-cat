document.addEventListener('DOMContentLoaded', () => {
// card options
    const cardArray = [
        {
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

    const grid = document.querySelector('.grid')

    // create your board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card

        }
    }
});