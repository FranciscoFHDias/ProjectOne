![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
# Project One - Space Invaders 
[Check out the game](https://franciscofhdias.github.io/ProjectOne/)

![Space Invaders](https://user-images.githubusercontent.com/49660544/61526596-99eba000-aa12-11e9-88b7-14152face7e5.gif)

## Overview

A classic arcade game which the player aims to shoot an invading alien armada.The player can only move left or right. The aliens also move from left to right, and down each time they reach the side of the screen. Bombs will also drop towards the player.

The player will win when all aliens die. The aim is for the player to achieve the highest score possible by killing aliens or destroying bombs before either destroying all aliens, being destroyed by a bomb, or allowing the aliens to reach the planet.

## Project Brief and Technical Requirements

* Design logic for player to be able to clear at least one wave of aliens and display the score at end of the game,
* Use semantic markup for HTML and CSS (adhere to best practices),
* Render a grid-based game in the browser,
* Have separate HTML / CSS / JavaScript files,
* Use Javascript for DOM manipulation,
* Deploy the game online, using Github Pages,

## Project Execution

### Technologies used
* HTML5 with HTML5 audio
* CSS3
* JavaScript (ES6)
* Git
* GitHub

## Project Overview

### Grid layout

The grid is represented by 225 divs 30px by 30px (grid = 15 divs x 15 divs) wrapped in a grid using CSS3 Flex-Box. I found this method worked well for me because I was able to use arrays of divs to create the effect of movement with JavaScript ES6 and styling with CSS.

### Scoreboard and Difficulty

I made this by creating a different section with a couple of divs inside which Flex-Box space-between made it easier to position above the grid.

### Invaders Movement

Having created the style for the class invader, I then used a JS for loop to remove this class from the current div, add direction to div[i] followed by adding class invader.

```js
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
```

### Spaceship Movement

```js
function moveSpaceShip (e) {
  squares[spaceShipIndex].classList.remove('spaceShip')
  if (e.key === 'ArrowLeft' && spaceShipIndex > 210) {
    spaceShipIndex -= 1
  } else if (e.key === 'ArrowRight' && spaceShipIndex < 224){
    spaceShipIndex += 1
  }
  squares[spaceShipIndex].classList.add('spaceShip')
}
```

### Spaceship Lazer and Invaders Bombs 

I used a similar approach forboth Lazer and Invaders Bombs. 

```js
let fireBombId = setInterval(fireBomb, 1000)
// logic to fire Bombs
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
      score = score + 10
      scoreBoard.textContent = score
    } else if (squares[bombIndex].classList.contains('spaceShip') === true) {
      spaceShipExplosion.play()
      clearInterval(bombTimerId)
      losing()
    } else {
      squares[bombIndex].classList.add('bomb')
    }
  }, 100)
  bombIntervals.push(bombIntervals)
}
```

## Wins and Blockers
* The main challenge was the movement of a large group of aliens in formation
 * The animation of the bombs and player's shots was also challenging.
 * Collision detection was challenging
 * Clearing setIntervals




## Future features
* Responsive design
* Include difficulty levels with more invaders, faster bombs and invaders.
* Persistent leaderboard using `localStorage`

## What you have learned (tech & soft skills)
* Make sure you spend plenty of time planning _before_ you start coding
* Make sure you understand all of the rules of the game
* Make a checklist of all the features you want to add to the game
* Keep It Stupid Simple
* Refactor your code as you go
* Make sure you have a good idea of what your MVP is and only add extra features once you have achieved it
* Do just enough styling to get started, then once you have your MVP polish up the styling before moving on
