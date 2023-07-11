document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'setHours()'
    },
    {
      name: '1',
      img: 'Changes the time (0-23).'
    },
    {
      name: '2',
      img: 'setMilliseconds()'
    },
    {
      name: '2',
      img: 'This function sets the milliseconds (0-999). '
    },
    {
      name: '3',
      img: 'history'
    },
    {
      name: '3',
      img: "Provides the window's History object."
    },
    {
      name: '4',
      img: 'innerHeight'
    },
    {
      name: '4',
      img: "The content area of a window's inner height."
    },
    {
      name: '5',
      img: 'innerWidth'
    },
    {
      name: '5',
      img: "The content area's inner width."
    },
    {
      name: '6',
      img: 'closed '
    },
    {
      name: '6',
      img: 'Returns true or false depending on whether or not a window has been closed.'
    },
    {
      name: '7',
      img: 'pageXOffset '
    },
    {
      name: '7',
      img: "The number of pixels offset from the centre of the page. The current document has been horizontally scrolled. "
    },
    {
      name: '8',
      img: 'pageYOffset'
    },
    {
      name: '8',
      img: 'The number of pixels offset from the centre of the page. The document has been vertically scrolled.'
    },
    {
      name: '9',
      img: 'navigator '
    },
    {
      name: '9',
      img: "Returns the window's Navigator object. "
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

cards[optionOneId].parentElement.classList.remove("green")
      

      

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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 24 completed!</h2><a href='https://elaidina.github.io/javascript/level25.html'> Continue to Level 25</a>";


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
