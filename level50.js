document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Using a constructor      with the "new" keyword'
    },
    {
      name: '1',
      img: "const car1 = new Car('Toyota', 'Prius', 2016);      "
    },
    {
      name: '2',
      img: 'Adding method to the constructor prototype'
    },
    {
      name: '2',
      img: 'Car.prototype.age = function(){        return (new Date()).getFullYear() - this.year;        }        car1.age(); // 2'
    },
    {
      name: '3',
      img: '"prototype" property'
    },
    {
      name: '3',
      img: 'get inherited to every      instance of the      constructor'
    },
    {
      name: '4',
      img: '"new" keyword'
    },
    {
      name: '4',
      img: 'is      used to create a new      object (instance) from      the constructor'
    },
    {
      name: '5',
      img: 'Math.pow(2, 3)'
    },
    {
      name: '5',
      img: '8'
    },
    {
      name: '6',
      img: 'Math.sqrt(16)'
    },
    {
      name: '6',
      img: '4'
    },
    {
      name: '7',
      img: 'Math.min(7, 8, 6) '
    },
    {
      name: '7',
      img: '6'
    },
    {
      name: '8',
      img: 'Math.max(7, 8, 6)'
    },
    {
      name: '8',
      img: '8'
    },
    {
      name: '9',
      img: 'Math.floor(123.45)'
    },
    {
      name: '9',
      img: '123'
    },
    {
      name: '10',
      img: 'Math.ceil(123.45)'
    },
    {
      name: '10',
      img: '124'
    },
    {
      name: '11',
      img: 'Math.round(123.45)'
    },
    {
      name: '11',
      img: '123'
    },
    {
      name: '12',
      img: 'Math.random()'
    },
    {
      name: '12',
      img: ' 0.45'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/javascript/level47.html'> Continue to next level </a>";


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
