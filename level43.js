document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Statement '
    },
    {
      name: '1',
      img: 'A group of words, numbers      and operators that do a      task is a statement.'
    },
    {
      name: '2',
      img: 'Expression'
    },
    {
      name: '2',
      img: ' A reference, value or a      group of reference(s)      and value(s) combined      with operator(s), which      result in a single value.'
    },
    {
      name: '3',
      img: 'Object '
    },
    {
      name: '3',
      img: 'A data type in      JavaScript that is used to store      a combination of data in a      simple key-value pair. '
    },
    {
      name: '4',
      img: 'Method'
    },
    {
      name: '4',
      img: 'If a key has a      function as a value.'
    },
    {
      name: '5',
      img: 'Keyword / reserved word'
    },
    {
      name: '5',
      img: 'Any word that is part of      the vocabulary of the      programming language.'
    },
    {
      name: '6',
      img: 'Variable'
    },
    {
      name: '6',
      img: 'A named reference to      a value i.'
    },
    {
      name: '7',
      img: 'Operators'
    },
    {
      name: '7',
      img: ' Reserved-words that      perform action on values and variables.'
    },
    {
      name: '8',
      img: '. Functions... '
    },
    {
      name: '8',
      img: '... allow for organizing code into sections and code reusability.'
    },
    {
      name: '9',
      img: 'Return'
    },
    {
      name: '9',
      img: 'A function can optionally      spit-out or "return" a value     once its invoked. Once a      function returns, no further      lines of code within the      function run. '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/javascript/level44.html'> Continue to next level </a>";


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
