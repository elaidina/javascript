document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "fromCharCode()"
    },
    {
      name: '1',
      img: ' This method is used for returning a string made from a particular sequence of UTF-16 code units.'
    },
    {
      name: '2',
      img: 'concat()'
    },
    {
      name: '2',
      img: 'This method is used for concatenating or joining multiple strings into a single string. '
    },
    {
      name: '3',
      img: 'replace()'
    },
    {
      name: '3',
      img: 'This method is used for finding and replacing a given text in the string'
    },
    {
      name: '4',
      img: 'This method is used for retrieving the matches of a string against a pattern string which is provided. '
    },
    {
      name: '4',
      img: 'match()'
    },
    {
      name: '5',
      img: 'indexOf() '
    },
    {
      name: '5',
      img: 'This method is used for providing the index of the first appearance of a given text inside the string.'
    },
    {
      name: '6',
      img: ' lastIndexOf() '
    },
    {
      name: '6',
      img: 'This method is similar to the indexOf() methods and differs in the fact that it searches for the last occurrence of the character and searches backwards. '
    },
    {
      name: '7',
      img: 'search()'
    },
    {
      name: '7',
      img: "This method is used for executing a search for a matching text and returning the index of the searched string."
    },
    {
      name: '8',
      img: "substr()"
    },
    {
      name: '8',
      img: 'This method is pretty much the same as the slice() method but the extraction of a substring in it depends on a given number of characters'
    },
    {
      name: '9',
      img: 'toLowerCase()'
    },
    {
      name: '9',
      img: 'This method is used for converting strings to lower case.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 10 completed!</h2><a href="https://elaidina.github.io/javascript/level11.html"> Continue to Level 11</a>';


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
