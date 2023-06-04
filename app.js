document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray =  [
    {
      name: '1',
      img: 'var x = 140;'
    },
    {
      name: '1',
      img: "Variable x can be reassigned a new value and also redeclared, but only inside the context of a function. "
    },
    {
      name: '2',
      img: 'const x = 5;'
    },
    {
      name: '2',
      img: "They can neither be reassigned values (their value remains fixed throughout the execution of the code), nor redeclared. "
    },
    {
      name: '3',
      img: 'let x = 202;'
    },
    {
      name: '3',
      img: "The let variable, like const, cannot be redeclared. But they can be reassigned a value. "
    },
    {
      name: '4',
      img: 'Numbers'
    },
    {
      name: '4',
      img: "These are just numerical values. They can be real numbers or integers."
    },
    {
      name: '5',
      img: 'String'
    },
    {
      name: '5',
      img: "These data types of JavaScript are a combination of multiple characters. "
    },
    {
      name: '6',
      img: 'Boolean'
    },
    {
      name: '6',
      img: "values can be true or false"
    },
    {
      name: '7',
      img: 'containers for named values called properties'
    },
    {
      name: '7',
      img: "Objects"
    },
    {
      name: '8',
      img: '+'
    },
    {
      name: '8',
      img: "The Addition Operator is used to add two numbers"
    },
    {
      name: '9',
      img: ' -'
    },
    {
      name: '9',
      img: "The Subtraction Operator is used to subtract two numbers"
    },
    {
      name: '10',
      img: "*"
    },
    {
      name: '10',
      img: "The MultiplicationOperator is used to multiply two numbers"
    },
    {
      name: '11',
      img: '/'
    },
    {
      name: '11',
      img: "The Division Operator is used to divide two numbers"
    },
    {
      name: '12',
      img: '(...)'
    },
    {
      name: '12',
      img: "Operations within brackets are executed earlier than that outside."
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 1 completed!</h2><a href="https://elaidina.github.io/javascript/level2.html"> Continue to Level 2</a>'


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
