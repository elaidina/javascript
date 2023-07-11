document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'ternary operator'
    },
    {
      name: '1',
      img: "A condition followed by a question mark (? ), an expression to execute if the condition is true followed by a colon (:), and lastly an expression to execute if the condition is false."
    },
    {
      name: '2',
      img: '&&'
    },
    {
      name: '2',
      img: " If and only if all of the operands are true, the logical AND operator (logical conjunction) for a set of Boolean operands is true. It will be false if it is not. "
    },
    {
      name: '3',
      img: '||'
    },
    {
      name: '3',
      img: " If and only if one or more of its operands are true, the logical OR operator (logical disjunction) is true for a set of operands. It returns a Boolean value when this is the case."
    },
    {
      name: '4',
      img: '!'
    },
    {
      name: '4',
      img: " The logical NOT operator (logical complement, negation) converts truth to falsity."
    },
    {
      name: '5',
      img: 'if (check condition) { } else {}'
    },
    {
      name: '5',
      img: "If specific requirements are met, something is done; if they are not met, another action is taken."
    },
    {
      name: '6',
      img: 'for (initialization of the loop variable; condition checking for the loop; updation after the loop) {... }'
    },
    {
      name: '6',
      img: "... = code to be executed in loop"
    },
    {
      name: '7',
      img: 'Initialization of the loop variable is done before the while loop begins.'
    },
    {
      name: '7',
      img: "while(condition checking for the loop){  1. code to be executed in loop        2. updation of the loop variable }"
    },
    {
      name: '8',
      img: 'Initialization of the loop variable is done before the do-while loop begins. '
    },
    {
      name: '8',
      img: "do{ 1. code to be executed in loop  2. updation of the loop variable }while(condition checking for the loop);"
    },
    {
      name: '9',
      img: 'the continue statement'
    },
    {
      name: '9',
      img: "Skip parts of the loop if certain conditions are met."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 4 completed!</h2><a href='https://elaidina.github.io/javascript/level5.html'> Continue to Level 5</a>";


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
