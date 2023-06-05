document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'isDefaultNamespace() '
    },
    {
      name: '1',
      img: 'returns true if a given namespaceURI is the default, and false otherwise.     '
    },
    {
      name: '2',
      img: 'isEqualNode() '
    },
    {
      name: '2',
      img: 'Determines whether two elements are the same. '
    },
    {
      name: '3',
      img: ' isSameNode() '
    },
    {
      name: '3',
      img: ' Determines whether two elements belong to the same node.'
    },
    {
      name: '4',
      img: 'isSupported() '
    },
    {
      name: '4',
      img: "Returns true if the element supports the provided feature. "
    },
    {
      name: '5',
      img: 'lookupNamespaceURI() '
    },
    {
      name: '5',
      img: ' Returns the namespace URI for a specific node.'
    },
    {
      name: '6',
      img: 'lookupPrefix'
    },
    {
      name: '6',
      img: 'If the prefix for a given namespace URI is present, lookupPrefix() returns a DOMString containing it.'
    },
    {
      name: '7',
      img: 'normalise()'
    },
    {
      name: '7',
      img: 'In an element, joins neighbouring text nodes and removes empty text nodes.'
    },
    {
      name: '8',
      img: 'removeChild()'
    },
    {
      name: '8',
      img: "Removes a child node from an element using the Child() method." 
    },
    {
      name: '9',
      img: 'replaceChild() '
    },
    {
      name: '9',
      img: 'In an element, this function replaces a child node.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 14 completed!</h2><a href='https://elaidina.github.io/javascript/level15.html'> Continue to Level 15</a>";


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
