document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'moveTo()'
    },
    {
      name: '1',
      img: ' This function moves a window to a specific location.'
    },
    {
      name: '2',
      img: 'close()'
    },
    {
      name: '2',
      img: ' This function closes the currently open window.'
    },
    {
      name: '3',
      img: 'Shows a dialogue box with a message and buttons to OK and Cancel.'
    },
    {
      name: '3',
      img: 'confirm()'
    },
    {
      name: '4',
      img: 'focus()'
    },
    {
      name: '4',
      img: "Sets the current window's focus."
    },
    {
      name: '5',
      img: 'scrollBy()'
    },
    {
      name: '5',
      img: "Scrolls the document by a certain amount of pixels."
    },
    {
      name: '6',
      img: 'scrollTo() '
    },
    {
      name: '6',
      img: 'Scrolls the document to the supplied coordinates with the scrollTo() method. '
    },
    {
      name: '7',
      img: 'prompt()'
    },
    {
      name: '7',
      img: 'Shows a conversation window asking for feedback from the visitor.'
    },
    {
      name: '8',
      img: 'resizeBy()'
    },
    {
      name: '8',
      img: "Resizes the window by the number of pixels supplied."
    },
    {
      name: '9',
      img: 'resizeTo()  '
    },
    {
      name: '9',
      img: "Resizes the window to the width and height supplied."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 28 completed!</h2><a href='https://elaidina.github.io/javascript/level29.html'> Continue to Level 29</a>";


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
