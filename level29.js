document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'stop() '
    },
    {
      name: '1',
      img: "This function prevents the window from loading."
    },
    {
      name: '2',
      img: 'height '
    },
    {
      name: '2',
      img: "The screen's entire height."
    },
    {
      name: '3',
      img: 'pixelDepth'
    },
    {
      name: '3',
      img: "The screen's colour resolution in bits per pixel. "
    },
    {
      name: '4',
      img: 'width '
    },
    {
      name: '4',
      img: "The screen's entire width."
    },
    {
      name: '5',
      img: 'colorDepth'
    },
    {
      name: '5',
      img: "Gets the colour palette's bit depth for showing images." 
    },
    {
      name: '6',
      img: ' availableHeight '
    },
    {
      name: '6',
      img: "Returns the screen's height (excluding the Windows Taskbar)."  
    },
    {
      name: '7',
      img: 'availableWidth'
    },
    {
      name: '7',
      img: "Returns the screen's width (excluding the Windows Taskbar)." 
    },
    {
      name: '8',
      img: 'JavaScript Events '
    },
    {
      name: '8',
      img: 'Things that can happen to HTML components and are executed by the user in JavaScript.'
    },
    {
      name: '9',
      img: 'onclick'
    },
    {
      name: '9',
      img: 'When a user clicks on an element, an event is triggered. '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 29 completed!</h2><a href='https://elaidina.github.io/javascript/level30.html'> Continue to Level 30</a>";


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
