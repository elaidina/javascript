document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'atan(x)'
    },
    {
      name: '1',
      img: 'the numeric value of the arctangent of x '
    },
    {
      name: '2',
      img: 'atan2(y,x)'
    },
    {
      name: '2',
      img: "Arctangent of its arguments' quotient"
    },
    {
      name: '3',
      img: 'ceil(x)'
    },
    {
      name: '3',
      img: "x's value rounded to the next integer" 
    },
    {
      name: '4',
      img: 'cos(x) '
    },
    {
      name: '4',
      img: "The cosine of x is cos(x) (x is in radians) "
    },
    {
      name: '5',
      img: 'max(x,y,z,...,n) '
    },
    {
      name: '5',
      img: ' Returns the highest-valued number.'
    },
    {
      name: '6',
      img: ' min(x,y,z,...,n)'
    },
    {
      name: '6',
      img:  "The number with the lowest value is the same as the number with the highest value. "
    },
    {
      name: '7',
      img: 'Date() '
    },
    {
      name: '7',
      img: 'Returns a new date object that contains the current date and time.'
    },
    {
      name: '8',
      img: 'Date(1993, 6, 19, 5, 12, 50, 32) Except for the year and month, we can omit anything we like.'
    },
    {
      name: '8',
      img: ' We can create a custom date object with the pattern as Year, month, day, hour, minutes, seconds, and milliseconds are represented by the numbers. '
    },
    {
      name: '9',
      img: 'Date("1999-12-22")'
    },
    {
      name: '9',
      img: 'Date as a string declaration'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 21 completed!</h2><a href='https://elaidina.github.io/javascript/level22.html'> Continue to Level 12</a>";


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
