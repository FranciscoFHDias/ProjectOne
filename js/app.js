document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const invaders = [0,2,4,6,8,10,12]
  const width = 15
  let direction = 1
  let currentIndex = 0
  let cannon = [217]


  console.log(invaders)
  // create a line of 1space 6invader 1space 6invader 1space invaders at the top of the grid
  // invaders.forEach(index => squares[index].classList.add('invader'))

  // move the line 1 square to the right
  function moveInvaders() {
    // for loop that moves the invaders
    for(let i = 0; i < invaders.length; i++) {
      squares[invaders[i]].classList.remove('invader')
      invaders[i] += direction
      squares[invaders[i]].classList.add('invader')
    }

    // logic to decide the movement the NEXT time we move the invaders
    const atLeftEdge = invaders[0] % width === 0
    const atRightEdge = invaders[invaders.length - 1] % width === width - 1

    if ((atLeftEdge && direction === -1) || (atRightEdge && direction === 1)) {
      direction = width
    } else if (direction === width) {
      if (atLeftEdge) direction = 1
      else direction = -1
    }

  }

  setInterval(moveInvaders, 500)
  // move 1 line down

  // move the line 1 square to the left

  // if the line get to line 15 game is over and player loses



  function placeCannon () {
    squares[cannon].classList.add('cannon')
  }

  placeCannon()



  function moveCannon (e) {

    for(let i = 0; i < cannon.length; i++) {

      if (e.key === 'ArrowLeft') {
        squares[cannon[currentIndex]].classList.remove('cannon')
        cannon[currentIndex] -= 1
        squares[cannon[currentIndex]].classList.add('cannon')
      } else if (e.key === 'ArrowRight'){
        squares[cannon[currentIndex]].classList.remove('cannon')
        cannon[currentIndex] += 1
        squares[cannon[currentIndex]].classList.add('cannon')
      }
    }

    if (squares[cannon[currentIndex]] === 210) {
      cannon[currentIndex] = 210
    } else if (squares[cannon[currentIndex]] === 224) {
      cannon[currentIndex] = 224
    }

  }

  document.addEventListener('keydown', moveCannon)

  // when user press left  key 37  move cannon direction +1

  //     cannonIndex[].classList.remove('cannon')
  //     cannon = cannon + 1
  //     cannon.classList.add('cannon')
  //
  //   }
  // }

  // else if// when user press right key 39 cannon direction -1
  // (e.keyCode === 39) {
  //   cannon.classList.remove('cannon')
  // } else if (e.keyCode === 38) {
  //   cannon.classList.remove('cannon')
  // }
  //

  //   if(e.keyCode === 39)
  // fire cannon when user press forward  key 38

  // square[5].classList.remove('.cannon')




})
