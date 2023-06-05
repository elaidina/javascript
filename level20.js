document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'exp(x) '
    },
    {
      name: '1',
      img: "Ex's value "
    },
    {
      name: '2',
      img: 'floor(x) '
    },
    {
      name: '2',
      img: "x's value rounded to the nearest integer." 
    },
    {
      name: '3',
      img: 'log(x)  '
    },
    {
      name: '3', 
      img: 'The natural logarithm (base E) of x is log(x).'
    },
    {
      name: '4',
      img: 'abs(x) '
    },
    {
      name: '4',
      img: 'Returns the value of x in its absolute (positive) form.'
    },
    {
      name: '5',
      img: 'acos(x)'
    },
    {
      name: '5',
      img: "In radians, the arccosine of x."
    },
    {
      name: '6',
      img: 'asin(x)'
    },
    {
      name: '6',
      img: "In radians, the arcsine of x."
    },
    {
      name: '7',
      img: 'pow(x,y)'
    },
    {
      name: '7',
      img: 'x to the power of y'
    },
    {
      name: '8',
      img: 'random()'
    },
    {
      name: '8',
      img: 'Returns a number between 0 and 1 at random. '
    },
    {
      name: '9',
      img: 'round(x) '
    },
    {
      name: '9',
      img: 'Rounds the value of x to the nearest integer.'
    },
    {
      name: '10',
      img: 'sin(x) '
    },
    {
      name: '10',
      img: 'The sine of x is sin(x) (x is in radians)'
    },
    {
      name: '11',
      img: 'sqrt(x)  '
    },
    {
      name: '11',
      img: "x's square root"
    },
    {
      name: '12',
      img: 'tan(x) '
    },
    {
      name: '12',
      img: "The angle's tangent"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 20 completed!</h2><a href='https://elaidina.github.io/javascript/level21.html'> Continue to Level 21</a>";


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
