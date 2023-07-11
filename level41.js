document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Stack memory'
    },
    {
      name: '1',
      img: 'Memory that is allocated in stacks.'
    },
    {
      name: '2',
      img: 'The function stack is...'
    },
    {
      name: '2',
      img: '...a function that maintains track of all other functions that are running at the same time. '
    },
    {
      name: '3',
      img: 'function second() {        console.log("Second")        }        function First() {        second()        }        function foo() {        first() }    foo()'
    },
    {
      name: '3',
      img: 'console.log...  second... first... foo'
    },
    {
      name: '4',
      img: 'An event loop is something that pulls various things like methods, etc. out of the queue...'
    },
    {
      name: '4',
      img: '...and places it onto the function execution stack whenever the function stack becomes empty.'
    },
    {
      name: '5',
      img: 'The event loop is the trick to making JavaScript appear multithreaded ...'
    },
    {
      name: '5',
      img: '...even if it is only single-threaded.'
    },
    {
      name: '6',
      img: 'The event loop is used to take the first event from the Event Queue ...'
    },
    {
      name: '6',
      img: '...and place it on the stack, which in this case is the callback function. '
    },
    {
      name: '7',
      img: 'try'
    },
    {
      name: '7',
      img: 'We can define a code block for testing errors using the try block.'
    },
    {
      name: '8',
      img: 'catch'
    },
    {
      name: '8',
      img: 'We can set up a block of code to execute in the event of an error using the catch statement.  '
    },
    {
      name: '9',
      img: 'throw'
    },
    {
      name: '9',
      img: 'Instead of the typical JavaScript errors, we can also create custom error messages using the throw statement.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/javascript/level42.html'> Continue to next level </a>";


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
