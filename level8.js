document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'includes any variable that is not contained within a function or block (a pair of curly braces).'
    },
    {
      name: '1',
      img: 'The global scope'
    },
    {
      name: '2',
      img: 'Global scope variables'
    },
    {
      name: '2',
      img: 'can be accessed from anywhere in the program.'
    },
    {
      name: '3',
      img: 'Variables declared inside a function are'
    },
    {
      name: '3',
      img: 'local variables'
    },
    {
      name: '4',
      img: 'They can only be accessed from within that function; they are not accessible from outside code.'
    },
    {
      name: '4',
      img: 'Local or Function Scope'
    },
    {
      name: '5',
      img: 'Block Scope '
    },
    {
      name: '5',
      img: 'Unlike var variables, let and const variables can be scoped to the nearest pair of curly brackets in ES6.'
    },
    {
      name: '6',
      img: 'Scope Chain'
    },
    {
      name: '6',
      img: " When a variable is used in JavaScript, the JavaScript engine searches the current scope for the variable's value. "
    },
    {
      name: '7',
      img: '...it will look into the outer scope until it finds it or reaches the global scope.'
    },
    {
      name: '7',
      img: "If the JS engine can't find the variable in the inner scope,..."
    },
    {
      name: '8',
      img: "If it still can't identify the variable, ..."
    },
    {
      name: '8',
      img: "...it will either return an error or implicitly declare the variable in the global scope (if not in strict mode)."
    },
    {
      name: '9',
      img: 'Hoisting '
    },
    {
      name: '9',
      img: 'Prior to executing the code, the interpreter appears to relocate the declarations of functions, variables, and classes to the top of their scope.'
    },
    {
      name: '10',
      img: 'Functions can be securely utilised in code...'
    },
    {
      name: '10',
      img: '...before they have been declared '
    },
    {
      name: '11',
      img: 'Variable and class declarations are likewise hoisted,...'
    },
    {
      name: '11',
      img: '...allowing them to be referenced prior to declaration.'
    },
    {
      name: '12',
      img: 'Without function hoisting,...'
    },
    {
      name: '12',
      img: '...we would have to first write down the function display and only then can we call it.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 8 completed!</h2><a href='https://elaidina.github.io/javascript/level9.html'> Continue to Level 9</a>";


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
