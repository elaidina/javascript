document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Child Node'
    },
    {
      name: '1',
      img: 'A node which is a      child of another node.'
    },
    {
      name: '2',
      img: 'Parent Node'
    },
    {
      name: '2',
      img: 'A node which      has one or more child.'
    },
    {
      name: '3',
      img: 'Descendent Node'
    },
    {
      name: '3',
      img: 'A node      which is nested deep in the      tree'
    },
    {
      name: '4',
      img: 'Sibling Node'
    },
    {
      name: '4',
      img: 'A node that      share the same parent node'
    },
    {
      name: '5',
      img: 'String'
    },
    {
      name: '5',
      img: '.concat()      .charAt()      .indexOf()      .startsWith()      .endsWith()     .split()      .slice()'
    },
    {
      name: '6',
      img: 'Number'
    },
    {
      name: '6',
      img: '.toFixed()      .toPrecision()      .toString()'
    },
    {
      name: '7',
      img: 'Array'
    },
    {
      name: '7',
      img: '.filter()      .map()      .find()      .every()      .some()      .sort()      .slice()      .splice()      .reduce()      .forEach()'
    },
    {
      name: '8',
      img: 'Date'
    },
    {
      name: '8',
      img: "const d = new Date('9/17/1988');      d.getDay()      d.getFullYear()      d.getMonth()      Date.now()"
    },
    {
      name: '9',
      img: 'Promise is an object...'
    },
    {
      name: '9',
      img: '... that provides a useful construct when dealing      with asynchronous tasks.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/javascript/level48.html'> Continue to next level </a>";


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
