![<img width="1391" alt="Date-a-base screenshot" src="https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png">](https://generalassemb.ly/?&where=london&topic=&mkt_account_id=1056949875&mkt_campaign_id=691843434&mkt_ad_group_id=34960362879&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=155682399044&mkt_network=g&mkt_target_id=kwd-459322816&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:LON:BR:GeneralAssembly&utm_content=campus-lead-lander&utm_term=general%20assembly&gclid=CjwKCAjw0vTtBRBREiwA3URt7lOmVVqqHJWL-eOckmt-HPJE8V3JE6HCSEG9vMjXjAr0fjSdcfyETxoCCe8QAvD_BwE)
# Project One - Space Invaders 

[Check out the game](https://franciscofhdias.github.io/ProjectOne/)

![<img width="1391" alt="Date-a-base screenshot" src="https://user-images.githubusercontent.com/49660544/61526596-99eba000-aa12-11e9-88b7-14152face7e5.gif">](https://franciscofhdias.github.io/ProjectOne/)

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

By creating an event listener and the logic below, I then achieved the movement for the spaceship.

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

To fire random bombs I used math.random to produce a div[i] and setInterval. The similar logic was used for the spaceship fire. Then if the same div has class 'lazer' and 'bomb' both setIntervals are removed and points added to the scoreboard.

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

### Wins
* Achieving the movement of a large group of aliens formation
* The animation of the bombs and player's shots was also challenging
* Collision detection by running an 'if' statement
* Clearing setIntervals when winning and losing
 
### Blockers
* Increase the number of aliens or used it in different formation

## Future Content/Features
* Responsive design for different devices
* Include difficulty levels with more invaders, faster bombs and spaceships fires.
* Fixed leaderboard using `localStorage` through the levels

## What you have learned (tech & soft skills)
* The importance of spending time planning before start coding
* Fully understand the brief and if not ask questions
* Make a checklist of all the features needed to achieve MVP vs further features
* Keep things simple and make code self-explanatory
