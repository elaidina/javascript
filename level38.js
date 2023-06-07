document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: ' ontouchcancel '
    },
    {
      name: '1',
      img: "The user's ability to touch the screen has been halted."
    },
    {
      name: '2',
      img: 'ontouchstart'
    },
    {
      name: '2',
      img: 'The touch-screen is activated by placing a finger on it.'
    },
    {
      name: '3',
      img: 'onstorage'
    },
    {
      name: '3',
      img: 'An part of Web Storage has been upgraded.'
    },
    {
      name: '4',
      img: 'ontoggle '
    },
    {
      name: '4',
      img: 'The user toggles the details> element open or closed. '
    },
    {
      name: '5',
      img: 'onwheel '
    },
    {
      name: '5',
      img: 'The mouse wheel moves up and down when it passes over an element.'
    },
    {
      name: '6',
      img: 'ontouchend'
    },
    {
      name: '6',
      img: "A touch-screen user's finger is withdrawn."
    },
    {
      name: '7',
      img: 'ontouchmove'
    },
    {
      name: '7',
      img: 'When a finger is dragged over the screen, it is called ontouchmove.'
    },
    {
      name: '8',
      img: 'Event propagation'
    },
    {
      name: '8',
      img: ' A technique that governs how events propagate through the DOM tree to reach their destination, as well as what happens to them once they arrive. '
    },
    {
      name: '9',
      img: 'Event propagation in current browsers is divided into two phases:'
    },
    {
      name: '9',
      img: 'capturing and bubbling'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/javascript/level39.html'> Continue to next level </a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
