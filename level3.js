 document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: '!='
    },
    {
      name: '1',
      img: "The inequality operator returns a Boolean value if the two operands are not equal. It tries to convert and compare operands of different kinds."
    },
    {
      name: '2',
      img: '!=='
    },
    {
      name: '2',
      img: "The inequivalent operator returns a Boolean value if the two operands are not equal or they are not of the same type. It tries to convert and compare operands of the same kinds."
    },
    {
      name: '3',
      img: '?'
    },
    {
      name: '3',
      img: "The conditional (ternary) operator is the only one in JavaScript that takes three operands."
    },
    {
      name: '4',
      img: '>'
    },
    {
      name: '4',
      img: "The Greater than operator returns true if the operand to its left is greater in value than the operand to its right. "
    },
    {
      name: '5',
      img: '<'
    },
    {
      name: '5',
      img: "The Lesser than operator returns true if the operand to its left is lesser in value than the operand to its right. "
    },
    {
      name: '6',
      img: '>='
    },
    {
      name: '6',
      img: "The Greater than equals to operator returns true if the operand to its left is greater in value or equal in value than the operand to its right."
    },
    {
      name: '7',
      img: '^'
    },
    {
      name: '7',
      img: "The bitwise XOR operator () returns a 1 in each bit position where the corresponding bits of both operands are 1s but not both."
    },
    {
      name: '8',
      img: '<='
    },
    {
      name: '8',
      img: "The Lesser than equals to operator returns true if the operand to its left is lesser in value or equal in value than the operand to its right."
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 3 completed!</h2><a href="https://elaidina.github.io/javascript/level4.html"> Continue to Level 4</a>';


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
