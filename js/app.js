document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const gameOver = document.querySelector('.gameOverHide')
  const reset = document.querySelector('button')
  let scoreBoard = document.querySelector('.score')
  let score = null
  const invaders = [0,2,4,6,8,10,12]
  const width = 15
  let direction = 1
  let spaceShipIndex = 217
  let lazer = spaceShipIndex


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

    if (invaders.some(invader => invader >= 210)) {
      clearInterval(moveInvadersId)
      invaders.forEach(invader => squares[invader].classList.remove('invader'))
      squares[spaceShipIndex].classList.remove('spaceShip')

      squares.forEach(function(square) {
        if (square.style.display === 'none') {
          square.style.display = ''
        } else {
          square.style.display = 'none'
        }
      })

      gameOver.classList.remove('gameOverHide')
      gameOver.classList.add('gameOver')

    }
  }

  const moveInvadersId = setInterval(moveInvaders, 500)

  function placeCannon () {
    squares[spaceShipIndex].classList.add('spaceShip')
  }

  placeCannon()

// logic to operate space ship
  function moveSpaceShip (e) {
    squares[spaceShipIndex].classList.remove('spaceShip')
    if (e.key === 'ArrowLeft' && spaceShipIndex > 210) {
      spaceShipIndex -= 1
    } else if (e.key === 'ArrowRight' && spaceShipIndex < 224){
      spaceShipIndex += 1
    }
    squares[spaceShipIndex].classList.add('spaceShip')
  }

  // logic to fire Lazer
  function fireLazer (e) {
    if (e.key === 'ArrowDown') {
      let lazer = spaceShipIndex
      // if (invaders.length === 0) {
      //   squares.forEach(function(square) {
      //     if (square.style.display === 'none') {
      //       square.style.display = ''
      //     } else {
      //       square.style.display = 'none'
      //     }
      //   })
      // 
      //
      // }
      const fireLazerId = setInterval(() => {
        squares[lazer].classList.remove('lazer')
        lazer -= width
        if (lazer <= 0){
          clearInterval(fireLazerId)
        }else if (squares[lazer].classList.contains('invader') === true){
          clearInterval(fireLazerId)
          squares[lazer].classList.remove('lazer')
          squares[lazer].classList.remove('invader')
          score++
          scoreBoard.textContent = score
          const invaderIndex = invaders.indexOf(lazer)
          invaders.splice(invaderIndex, 1)
        }else if (lazer > -1) {
          squares[lazer].classList.add('lazer')
        }
      }, 100)
    }
  }


  document.addEventListener('keydown', moveSpaceShip)
  document.addEventListener('keydown', fireLazer)
  reset.addEventListener('click', () => location.reload())

})
