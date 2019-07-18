document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const gameOver = document.querySelector('.gameOverHide')
  const winner = document.querySelector('.levelTwoHide')
  const losePlayAgain = document.querySelector('.losePlayAgain')
  const winPlayAgain = document.querySelector('.winPlayAgain')
  const scoreBoard = document.querySelector('.score')
  let score = null
  let invaders = [0,2,4,6,8,10,12]
  const width = 15
  let direction = 1
  let spaceShipIndex = 217
  const gameOverSound = new Audio()
  gameOverSound.src = 'sound/017_9.wav'
  const spaceShipExplosion = new Audio()
  spaceShipExplosion.src = 'sound/003_12.wav'
  const killingInvaders = new Audio()
  killingInvaders.src = 'sound/014_6.wav'
  const shooting = new Audio()
  shooting.src = 'sound/001_1.wav'
  const invaderBomb = new Audio()
  invaderBomb.src = 'sound/ufo_lowpitch.wav'

  function placeCannon () {
    return squares[spaceShipIndex].classList.add('spaceShip')
  }

  placeCannon()

  // move the line 1 square to the right
  function moveInvaders() {

    if (invaders.length === 0) {
      clearInterval(moveInvadersId)
      clearInterval(fireBombId)
      squares.forEach(function(square) {

        square.classList.remove('invader', 'spaceShip', 'bomb', 'lazer')

        if (square.style.display === 'none') {
          square.style.display = ''
        } else {
          square.style.display = 'none'
        }
      })

      winner.classList.remove('levelTwoHide')
      winner.classList.add('levelTwo')

    }

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
      gameOverSound.play()
      clearInterval(moveInvadersId)
      clearInterval(fireBombId)
      squares.forEach(function(square) {
        square.classList.remove('invader', 'spaceShip', 'bomb', 'lazer')
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

  let moveInvadersId = setInterval(moveInvaders, 500)


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
    if (e.key === 'ArrowUp') {
      shooting.play()
      e.preventDefault()
      let lazer = spaceShipIndex
      const fireLazerId = setInterval(() => {
        squares[lazer].classList.remove('lazer')
        lazer -= width
        if (lazer <= 0){
          clearInterval(fireLazerId)
        }else if (squares[lazer].classList.contains('invader') === true){
          killingInvaders.play()
          clearInterval(fireLazerId)
          squares[lazer].classList.remove('lazer','invader')
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


  let intervals1 = []

  let fireBombId = setInterval(fireBomb, 1000)

  function fireBomb() {
    let bombIndex = Math.floor(Math.random() * 15)
    const bombTimerId = setInterval(() => {
      squares[bombIndex].classList.remove('bomb')
      bombIndex += width
      if (bombIndex > 224 ) {
        clearInterval(bombTimerId)
      } else if (squares[bombIndex].classList.contains('lazer') === true){
        clearInterval(bombTimerId)
        squares[bombIndex].classList.remove('lazer','bomb')
      } else if (squares[bombIndex].classList.contains('spaceShip') === true) {
        spaceShipExplosion.play()
        clearInterval(moveInvadersId)
        clearInterval(fireBombId)
        clearInterval(bombTimerId)
        squares.forEach(square => square.classList.remove('invader', 'spaceShip', 'bomb', 'lazer'))
        squares.forEach(function(square) {
          if (square.style.display === 'none') {
            square.style.display = ''
          } else {
            square.style.display = 'none'
          }
        })
        gameOver.classList.remove('gameOverHide')
        gameOver.classList.add('gameOver')
      } else {
        squares[bombIndex].classList.add('bomb')
      }
    }, 150)
  }

  function playAgain () {
    clearInterval(moveInvadersId)
    clearInterval(fireBombId)
    squares.forEach(square => square.classList.remove('invader', 'spaceShip', 'bomb', 'lazer'))
    intervals1.forEach(interval => clearInterval(interval))
    squares.forEach(function(square) {
      if (square.style.display === 'none') {
        square.style.display = ''
      } else {
        square.style.display = ''
      }
    })
    winner.classList.remove('levelTwo')
    gameOver.classList.remove('gameOver')
    gameOver.classList.add('gameOverHide')
    winner.classList.add('levelTwoHide')
    invaders = [0,2,4,6,8,10,12]
    direction = 1
    spaceShipIndex = 217
    moveInvaders()
    moveInvadersId = setInterval(moveInvaders, 500)
    fireBomb()
    fireBombId = setInterval(fireBomb, 2000)
    score = 0
    scoreBoard.textContent = score
  }
  // const fireBombId = setInterval(fireBomb, 1000)

  // in a loop
  // remove bomb from square invader[i]
  // if bomb square[i] has spaceship
  // remove bomb and spaceShip
  // else if bomb square[i] has lazer
  // remove bomb and lazer
  // add bomb to square invader[i] + width




  document.addEventListener('keydown', moveSpaceShip)
  document.addEventListener('keydown', fireLazer)
  losePlayAgain.addEventListener('click', playAgain)
  winPlayAgain.addEventListener('click', playAgain)

})
