document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'confirm()'
    },
    {
      name: '1',
      img: "This function is used for opening up a yes or no dialogue box and for returning a boolean value depending upon the user's click "
    },
    {
      name: '2',
      img: 'parseFloat() '
    },
    {
      name: '2',
      img: 'This function is used for parsing the argument passed to it and returning a floating-point number. '
    },
    {
      name: '3',
      img: 'parseInt()'
    },
    {
      name: '3',
      img: 'This function is used for parsing the argument passed to it and returning an integral number. '
    },
    {
      name: '4',
      img: 'encodeURI()'
    },
    {
      name: '4',
      img: 'This function is used for encoding a URI into a UTF-8 encoding scheme. '
    },
    {
      name: '5',
      img: 'decodeURI()'
    },
    {
      name: '5',
      img: 'This function is used for decoding a Uniform Resource Identifier (URI) made by encodeURI() function or similar functions.'
    },
    {
      name: '6',
      img: 'encodeURIComponent() '
    },
    {
      name: '6',
      img: 'This function is used for the same purpose as encodeURI() only for URI components.'
    },
    {
      name: '7',
      img: 'decodeURIComponent()'
    },
    {
      name: '7',
      img: "This function is used for decoding a URI component."
    },
    {
      name: '8',
      img: 'isNaN()'
    },
    {
      name: '8',
      img: "This function is used for determining if a given value is Not a Number or not. "
    },
    {
      name: '9',
      img: 'Number()'
    },
    {
      name: '9',
      img: "This function is used for returning a number converted from what is passed as an argument to it."
    },
    {
      name: '10',
      img: 'eval()'
    },
    {
      name: '10',
      img: 'This function is used for evaluating JavaScript programs presented as strings. '
    },
    {
      name: '11',
      img: 'isFinite()'
    },
    {
      name: '11',
      img: 'This function is used for determining if a passed value is finite or not.'
    },
    {
      name: '12',
      img: 'The accessibility or visibility of variables in JavaScript. '
    },
    {
      name: '12',
      img: 'Scope'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 7 completed!</h2><a href='https://elaidina.github.io/javascript/level8.html'> Continue to Level 8</a>";


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
