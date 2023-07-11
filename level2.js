document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: '%'
    },
    {
      name: '1',
      img: "The Modulus operator is used to get the remainder when an integer number is divided by another integer number."
    },
    {
      name: '2',
      img: '++'
    },
    {
      name: '2',
      img: "The Increment operator is used to increase the value of numbers by one."
    },
    {
      name: '3',
      img: '--'
    },
    {
      name: '3',
      img: "The Decrement operator is used to decrease the value of numbers by one."
    },
    {
      name: '4',
      img: '&'
    },
    {
      name: '4',
      img: "The bitwise AND operator returns a 1 in every bit position where both operands' corresponding bits are 1."
    },
    {
      name: '5',
      img: '|'
    },
    {
      name: '5',
      img: "The bitwise OR returns a 1 in each bit position where either or both operands' corresponding bits are 1. "
    },
    {
      name: '6',
      img: '~'
    },
    {
      name: '6',
      img: "The bitwise NOT operator reverses the operand's bits. It turns the operand into a 32-bit signed integer, just like other bitwise operators. "
    },
    
    {
      name: '8',
      img: "=="
    },
    {
      name: '8',
      img: 'The equality operator returns a Boolean value when its two operands are equal. It tries to convert and compare operands of different kinds.'
    },
    {
      name: '9',
      img: '==='
    },
    {
      name: '9',
      img: "The equivalent operator returns a Boolean value when its two operands are equal and they have the same type. It tries to convert and compare operands of the same kinds."
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 2 completed!</h2><a href="https://elaidina.github.io/javascript/level3.html"> Continue to Level 3</a>'


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
