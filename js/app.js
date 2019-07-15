document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const invaders = [0,2,4,6,8,10,12]
  const width = 15
  let direction = 1
  let spaceShipIndex = 217
  let lazer = spaceShipIndex


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

    if (invaders.some(invader => invader >= 210)) {
      clearInterval(moveInvadersId)
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
    if (e.key === 'ArrowUp') {
      let lazer = spaceShipIndex
      const fireLazerId = setInterval(() => {
        squares[lazer].classList.remove('lazer')
        lazer -= width
        if (lazer > -1) {
          squares[lazer].classList.add('lazer')
        }else if (lazer <= 0){
          clearInterval(fireLazerId)
        }
      }, 100)
    }
  }


  document.addEventListener('keydown', moveSpaceShip)
  document.addEventListener('keydown', fireLazer)

  // when user press left  key 37  move spaceShip direction +1

  //     cannonIndex[].classList.remove('spaceShip')
  //     spaceShip = spaceShip + 1
  //     spaceShip.classList.add('spaceShip')
  //
  //   }
  // }

  // else if// when user press right key 39 spaceShip direction -1
  // (e.keyCode === 39) {
  //   spaceShip.classList.remove('spaceShip')
  // } else if (e.keyCode === 38) {
  //   spaceShip.classList.remove('spaceShip')
  // }
  //

  //   if(e.keyCode === 39)
  // fire spaceShip when user press forward  key 38

  // square[5].classList.remove('.spaceShip')




})
