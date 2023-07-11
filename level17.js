document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'filter() method'
    },
    {
      name: '1',
      img: 'items that do not meet a criterion are removed from the array'
    },
    {
      name: '2',
      img: 'callback function receives...'
    },
    {
      name: '2',
      img: '...every element of the array'
    },
    {
      name: '3',
      img: ' If the callback returns true on each iteration, the element will be added to the new array; ... '
    },
    {
      name: '3',
      img: '...otherwise, it will not be added. '
    },
    {
      name: '4',
      img: 'You can group parts of a regular expression together ...'
    },
    {
      name: '4',
      img: '...by putting them inside round brackets or parentheses.'
    },
    {
      name: '5',
      img: 'var arr = [13,40,47];      var odd = arr.filter(x => x % 2);'
    },
    {
      name: '5',
      img: 'odd; // [13,47]'
    },
    {
      name: '6',
      img: 'The reduce() method... '
    },
    {
      name: '6',
      img: '...can combine the items of an array into a single value. '
    },
    {
      name: '7',
      img: 'When using reduce, ...'
    },
    {
      name: '7',
      img: "...we must declare the accumulator's beginning value (final result)" 
    },
    {
      name: '8',
      img: "Each iteration, we do some operation inside the callback,..."
    },
    {
      name: '8',
      img: '...which is then added to the accumulator.'
    },
    {
      name: '9',
      img: '    var arr = [10,20,30];  var counter = 0;                let answer = arr.reduce((accumulator, value) => value + accumulator, counter);'
    },
    {
      name: '9',
      img: 'console.log(answer) // answer = 10 + 20 + 30 = 60'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 17 completed!</h2><a href="https://elaidina.github.io/javascript/level18.html"> Continue to Level 18</a>';


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
