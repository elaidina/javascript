document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Invoke a function'
    },
    {
      name: '1',
      img: "When we write the function name     someName, followed by the brackets symbol () like this      someName(), the code inside the function gets executed."
    },
    {
      name: '2',
      img: 'Code block'
    },
    {
      name: '2',
      img: 'Any code within the curly      braces { ... } is called a      "block of code", "code      block" or simply "block"'
    },
    {
      name: '3',
      img: 'Using a function has ONLY two parts.'
    },
    {
      name: '3',
      img: '(1) Declaring/defning a function, and (2) using/running a function.'
    },
    {
      name: '4',
      img: ' Type coercion priority order:'
    },
    {
      name: '4',
      img: "1. String      2. Number         3. Boolean"
    },
    {
      name: '5',
      img: 'switch (expression) {        case choice1:        // run this code        break;'
    },
    {
      name: '5',
      img: "case choice2:      // run this code      break;      default:      // run this code}"
    },
    {
      name: '6',
      img: 'Truthy Values '
    },
    {
      name: '6',
      img: 'true   ,   "text"   ,   72   ,   -72    ,  Infinity ,     Infinity   ,  {}    ,  []'
    },
    {
      name: '7',
      img: 'Falsy Values'
    },
    {
      name: '7',
      img: 'false , "" , 0 ,      -0 ,      NaN ,      null,     undefined'
    },
    {
      name: '8',
      img: 'Ternary Operator:'
    },
    {
      name: '8',
      img: '(expression)? ifTrue: ifFalse;'
    },
    {
      name: '9',
      img: 'Window'
    },
    {
      name: '9',
      img: 'Each tab of a browser is      considered the window.      This is the outer most      container that a web-app      can access.'
    },
   /*  {
      name: '9',
      img: 'As soon as he was back in the car he opened his present.'
    },
    {
      name: '9',
      img: 'Len čo sa vrátil do auta, otvoril svoj darček.'
    },
    {
      name: '10',
      img: 'I have got sunglasses!'
    },
    {
      name: '10',
      img: 'Mám slnečné okuliare!'
    },
    {
      name: '11',
      img: 'He was very pleased.'
    },
    {
      name: '11',
      img: 'Veľmi sa potešil.'
    },
    {
      name: '12',
      img: 'It snowed a lot while he was sleeping.'
    },
    {
      name: '12',
      img: 'Keď spal, veľa snežilo.'
    } */
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/sve1/'> Continue to next level </a>";


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
