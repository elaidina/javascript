document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'break statement '
    },
    {
      name: '1',
      img: " Used to stop and exit the cycle when specific conditions are met."
    },
    {
      name: '2',
      img: 'Arrays can be defined as a collection of objects of the same type. '
    },
    {
      name: '2',
      img: "var numbers = [1, 2,3]; "
    },
    {
      name: '3',
      img: 'pop()'
    },
    {
      name: '3',
      img: "This method is used for removing the last element of an array."
    },
    {
      name: '4',
      img: 'Den yngsta som gömt sig i klockan var den enda killingen, som vargen inte hittade. '
    },
    {
      name: '4',
      img: "The youngest who hid in the bell was the only kitten that the wolf did not find."
    },
    {
      name: '5',
      img: 'Vargen var nu mätt och nöjd och gick sin väg.'
    },
    {
      name: '5',
      img: "The wolf was now full and satisfied and went his way."
    },
    {
      name: '6',
      img: 'Han lade sig under ett träd på den gröna ängen utanför killingarnas hus och föll i sömn. '
    },
    {
      name: '6',
      img: "He laid down under a tree in the green meadow outside the kittens' house and fell asleep."
    },
    {
      name: '7',
      img: 'Strax därefter kom den gamla getmamman tillbaks från skogen.'
    },
    {
      name: '7',
      img: "Soon after, the old mother goat came back from the forest."
    },
    {
      name: '8',
      img: 'Ack, vilken syn som mötte henne!'
    },
    {
      name: '8',
      img: "Alas, what a sight met her!"
    },
    {
      name: '9',
      img: 'Ytterdörren stod vidöppen.'
    },
    {
      name: '9',
      img: "The front door was wide open."
    },
    
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 5 completed!</h2><a href='https://elaidina.github.io/javascript/level6.html'> Continue to Level 6</a>";


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
