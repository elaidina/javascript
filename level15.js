document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'getAttribute()'
    },
    {
      name: '1',
      img: "Returns the value of an element node's provided attribute."
    },
    {
      name: '2',
      img: 'getAttributeNS() '
    },
    {
      name: '2',
      img: 'returns the string value of an attribute with the namespace and name supplied.'
    },
    {
      name: '3',
      img: 'getAttributeNode()'
    },
    {
      name: '3',
      img: 'Returns the attribute node supplied.'
    },
    {
      name: '4',
      img: 'getAttributeNodeNS() '
    },
    {
      name: '4',
      img: 'Returns the attribute node for the specified namespace and name for the attribute.'
    },
    {
      name: '5',
      img: 'getElementsByTagName() '
    },
    {
      name: '5',
      img: 'Returns a list of all child elements whose tag name is supplied.'
    },
    {
      name: '6',
      img: 'getElementsByTagNameNS()'
    },
    {
      name: '6',
      img: 'Returns a live HTMLCollection of items belonging to the provided namespace with a certain tag name.'
    },
    {
      name: '7',
      img: 'hasAttribute()'
    },
    {
      name: '7',
      img: ' If an element has any attributes, it returns true; otherwise, it returns false.'
    },
    {
      name: '8',
      img: 'hasAttributeNS() '
    },
    {
      name: '8',
      img: ' returns true or false depending on whether the current element in a particular namespace has the supplied attribute.    '
    },
    {
      name: '9',
      img: 'removeAttribute()'
    },
    {
      name: '9',
      img: "Removes an element's supplied attribute."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 15 completed!</h2><a href='https://elaidina.github.io/javascript/level16.html'> Continue to Level 16</a>";


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
