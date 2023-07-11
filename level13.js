document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'ownerDocument'
    },
    {
      name: '1',
      img: "This node's top-level document object."
    },
    {
      name: '2',
      img: 'parentNode '
    },
    {
      name: '2',
      img: "Returns the element's parent node."
    },
    {
      name: '3',
      img: 'previousSibling'
    },
    {
      name: '3',
      img: ' Gets the node that comes before the current one.'
    },
    {
      name: '4',
      img: 'textContent '
    },
    {
      name: '4',
      img: "Sets or returns a node's and its descendants' textual content."
    },
    {
      name: '5',
      img: 'Node Methods...'
    },
    {
      name: '5',
      img: '...manipulate nodes in the DOM.'
    },
    {
      name: '6',
      img: 'appendChild() '
    },
    {
      name: '6',
      img: 'Adds a new child node as the last child node to an element.'
    },
    {
      name: '7',
      img: 'cloneNode() '
    },
    {
      name: '7',
      img: 'is a function that duplicates an HTML element. '
    },
    {
      name: '8',
      img: 'compareDocumentPosition() '
    },
    {
      name: '8',
      img: "Compares two elements' document positions. "
    },
    {
      name: '9',
      img: 'getFeature()'
    },
    {
      name: '9',
      img: 'returns an object that implements the APIs of a feature.'
    },
    {
      name: '10',
      img: 'hasAttributes()'
    },
    {
      name: '10',
      img: 'If an element has any attributes, it returns true; otherwise, it returns false.'
    },
    {
      name: '11',
      img: 'hasChildNodes()  '
    },
    {
      name: '11',
      img: ' If an element has any child nodes, it returns true; otherwise, it returns false. '
    },
    {
      name: '12',
      img: 'insertBefore()'
    },
    {
      name: '12',
      img: "Adds a new child node to the left of an existing child node."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 13 completed!</h2><a href='https://elaidina.github.io/javascript/level14.html'> Continue to Level 14</a>";


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
