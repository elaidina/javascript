document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'toUpperCase() '
    },
    {
      name: '1',
      img: 'This method is used for converting strings to upper case. '
    },
    {
      name: '2',
      img: 'charAt()'
    },
    {
      name: '2',
      img: 'This method is used for returning the character at a particular index of a string.'
    },
    {
      name: '3',
      img: 'charCodeAt() '
    },
    {
      name: '3',
      img: 'This method is used for returning to us the Unicode of the character at a  given index. '
    },
    {
      name: '4',
      img: 'slice()'
    },
    {
      name: '4',
      img: 'This method is used for extracting an area of the string and returning it.'
    },
    {
      name: '5',
      img: 'split()'
    },
    {
      name: '5',
      img: "This method is used for splitting a string object into an array of strings at a particular index."
    },
    {
      name: '6',
      img: 'substring()'
    },
    {
      name: '6',
      img: "Even this method is almost the same as the slice() method but it does not allow negative positions."
    },
    {
      name: '7',
      img: 'valueOf() '
    },
    {
      name: '7',
      img: 'This method is used for returning the primitive value (one without any properties or methods) of a string object.'
    },
    {
      name: '8',
      img: 'Document Object Model (DOM)'
    },
    {
      name: '8',
      img: "the structure of a webpage's code"
    },
    {
      name: '9',
      img: 'HTML elements '
    },
    {
      name: '9',
      img: 'nodes '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 11 completed!</h2><a href='https://elaidina.github.io/javascript/level12.html'> Continue to Level 12</a>";


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
