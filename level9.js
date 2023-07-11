document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: ' Variable Hoisting'
    },
    {
      name: '1',
      img: "You can use a variable in code before it is defined and/or initialised."
    },
    {
      name: '2',
      img: 'JavaScript, however, only hoists declarations,... '
    },
    {
      name: '2',
      img: " ...not initializations!"
    },
    {
      name: '3',
      img: 'var x'
    },
    {
      name: '3',
      img: "Declaration of variable x"
    },
    {
      name: '4',
      img: 'x = 7;'
    },
    {
      name: '4',
      img: 'Initialization of variable x to a value 7'
    },
    {
      name: '5',
      img: 'closure'
    },
    {
      name: '5',
      img: 'a function that has been bundled together (enclosed) with references to its surroundings (the lexical environment)      '
    },
    {
      name: '6',
      img: 'A closure allows an inner function ... '
    },
    {
      name: '6',
      img: '...to access the scope of an outside function. '
    },
    {
      name: '7',
      img: 'function subtractor(subtractingInteger) { return function(a) { return a - subtractingInteger; }; } '
      },
    {
      name: '7',
      img: 'var subtract2 = subtractor(2);      var subtract5 = subtractor(5);      console.log(subtract2(5));  // 3      console.log(subtract5(5)); // 0 '
    },
    {
      name: '8',
      img: 'Escape Sequences'
    },
    {
      name: '8',
      img: 'Escape Characters'
    },
    {
      name: '9',
      img: '\' '
    },
    {
      name: '9',
      img: ' Single quotes'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 9 completed!</h2><a href="https://elaidina.github.io/javascript/level10.html"> Continue to Level 10</a>'


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
