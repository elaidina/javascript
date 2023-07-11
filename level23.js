document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: ' getHours() '
    },
    {
      name: '1',
      img: 'Returns the current hour (0-23) '
    },
    {
      name: '2',
      img: 'getSeconds() '
    },
    {
      name: '2',
      img: "Returns the second number (0-59)"
    },
    {
      name: '3',
      img: 'setDate() '
    },
    {
      name: '3',
      img: 'Returns the current date as a number (1-31)'
    },
    {
      name: '4',
      img: 'setFullYear()'
    },
    {
      name: '4',
      img: 'This function sets the year (optionally month and day) '
    },
    {
      name: '5',
      img: 'setMonth()'
    },
    {
      name: '5',
      img: 'This function sets the month (0-11) '
    },
    {
      name: '6',
      img: 'setSeconds()'
    },
    {
      name: '6',
      img: 'This function sets the seconds (0-59) '
    },
    {
      name: '7',
      img: 'setTime()'
    },
    {
      name: '7',
      img: ' This function is used to set the time (milliseconds since January 1, 1970).'
    },
    {
      name: '8',
      img: 'setMinutes()'
    },
    {
      name: '8',
      img: "This function sets the minutes (0-59). "
    },
    {
      name: '9',
      img: 'setUTCDate()'
    },
    {
      name: '9',
      img: 'According to universal time, sets the day of the month for a given date (also available for day, month, full-year, hours, minutes etc.)'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 23 completed!</h2><a href='https://elaidina.github.io/javascript/level24.html'> Continue to Level 24</a>";


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
