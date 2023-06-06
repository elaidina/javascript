document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'onselect '
    },
    {
      name: '1',
      img: 'The user chooses some text (input> and textarea>).'
    },
    {
      name: '2',
      img: 'onsubmit  '
    },
    {
      name: '2',
      img: 'A form is filled out and submitted.'
    },
    {
      name: '3',
      img: 'ondrag  '
    },
    {
      name: '3',
      img: 'When an element is dragged, it is called ondrag.'
    },
    {
      name: '4',
      img: 'ondragend '
    },
    {
      name: '4',
      img: 'The element has been dragged to its final position.'
    },
    {
      name: '5',
      img: 'ondragenter '
    },
    {
      name: '5',
      img: 'When a dragged element enters a drop target, it is called ondragenter.'
    },
    {
      name: '6',
      img: 'ondragleave '
    },
    {
      name: '6',
      img: 'When a dragged element departs the drop target, it is called ondragleave. '
    },
    {
      name: '7',
      img: 'ondragover '
    },
    {
      name: '7',
      img: 'The dropped element is on top of the dragged element.'
    },
    {
      name: '8',
      img: 'ondragstart  '
    },
    {
      name: '8',
      img: ' The user begins dragging an element.'
    },
    {
      name: '9',
      img: 'ondrop'
    },
    {
      name: '9',
      img: 'When a dragged element is dropped on a drop target, it is called ondrop.   '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 32 completed!</h2><a href='https://elaidina.github.io/javascript/level33.html'> Continue to Level 33</a>";


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
