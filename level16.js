document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'removeAttributeNS() '
    },
    {
      name: '1',
      img: "Removes an attribute from an element in a specific namespace." 
    },
    {
      name: '2',
      img: 'setAttributeNode()'
    },
    {
      name: '2',
      img: 'Sets or modifies an attribute node.'
    },
    {
      name: '3',
      img: 'setAttributeNodeNS()'
    },
    {
      name: '3',
      img: 'Sets a new namespaced attribute node to an element with setAttributeNodeNS().'
    },
    {
      name: '4',
      img: 'Higher-order functions are those functions in JavaScript ...'
    },
    {
      name: '4',
      img: '...which can accept one or more functions as inputs and return a function as the result. '
    },
    {
      name: '5',
      img: 'The map method ... '
    },
    {
      name: '5',
      img: "...applies a function to each array element."
    },
    {
      name: '6',
      img: ' The callback function receives each element of the array...'
    },
    {
      name: '6',
      img: '...and returns a new array of the same length. '
    },
    {
      name: '7',
      img: 'var arr = [10,20,30]; '
    },
    {
      name: '7',
      img: "var triple  = arr.map(x => x * 3);  triple; // [30,60,90] "
    },
    {
      name: '8',
      img: 'map(), filter(), and reduce() '
    },
    {
      name: '8',
      img: 'can be used directly on an array'
    },
    {
      name: '9',
      img: 'Regular expressions'
    },
    {
      name: '9',
      img: 'search patterns that can be used to match string character combinations'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 16 completed!</h2><a href="https://elaidina.github.io/javascript/level17.html"> Continue to Level 17</a>'


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
