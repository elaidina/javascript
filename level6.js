document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'toString():'
    },
    {
      name: '1',
      img: "This method is used for converting the array elements into strings."
    },
    {
      name: '2',
      img: 'unshift()'
    },
    {
      name: '2',
      img: "This method is used for adding new elements at the beginning of the array."
    },
    {
      name: '3',
      img: 'valueOf()'
    },
    {
      name: '3',
      img: 'This method is used for returning the primitive value of the given object.'
    },
    {
      name: '4',
      img: 'indexOf()'
    },
    {
      name: '4',
      img: 'This method is used for returning the first index at which a given element is found in an array.'
    },
    {
      name: '5',
      img: 'lastIndexOf()'
    },
    {
      name: '5',
      img: "This method is used for returning the final index at which a given element appears in an array."
    },
    {
      name: '6',
      img: 'join()'
    },
    {
      name: '6',
      img: 'This method is used for combining elements of an array into one single string and then returning it.'
    },
    {
      name: '7',
      img: 'sort() '
    },
    {
      name: '7',
      img: 'This method is used for sorting the array elements based on some condition.'
    },
    {
      name: '8',
      img: 'JavaScript Functions can be defined as chunks of code written in JavaScript to perform a single task. '
    },
    {
      name: '8',
      img: "function name(parameterOne, parameterTwo, ..., parameterN) { Task of the function }"
    },
    {
      name: '9',
      img: 'prompt()'
    },
    {
      name: '9',
      img: 'This function is used for creating a dialogue box for taking input from the user.'
    },
    {
      name: '10',
      img: 'alert()'
    },
    {
      name: '10',
      img: 'This function is used for outputting information in an alert box in the browser window.'
    },
    {
      name: '11',
      img: 'console.log()'
    },
    {
      name: '11',
      img: "This function is used for writing data to the browser's console and is used for the purpose of debugging code by developers."
    },
    {
      name: '12',
      img: 'document.write()'
    },
    {
      name: '12',
      img: "This function is used for writing straight to our HTML document."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 6 completed!</h2><a href='https://elaidina.github.io/javascript/level7.html'> Continue to Level 7</a>";


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
