![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Tetris

> **Difficulty level: 3**

![tetris](https://media.git.generalassemb.ly/user/15120/files/daf26380-fec9-11e8-8acf-fa36d83d819c)

Tetris is a puzzle game where the player has to fit different shaped blocks (called Tetriminos) together so that they make a complete line across the playing board. Once a line is achieved it is removed from the game board and the player's score is increased.

The player can move the Tetriminos left and right and rotate them clockwise in 90º increments.

The aim of the game is to get as many points as possible before the game board is filled with Tetriminos.

## Resources

* [Tetris - NES Gameplay - Youtube](https://www.youtube.com/watch?v=CvUK-YWYcaE)
* [Tetris - Wikipedia](https://en.wikipedia.org/wiki/Tetris)

## Requirements

* The game should stop if a Tetrimino fills the highest row of the game board
* The player should be able to rotate each Tetrimino about its own axis
* If a line is completed it should be removed and the pieces above should take its place

## Suggested enhancements

* Responsive design
* Speed increases over time
* Persistent leaderboard using `localStorage`

## Challenges

By far the larges challenge here is the rotation of the Tetriminos. Each one rotates around a specific point on its axis. Also some Tetriminos, particularly the long bar, create problems issues when turning next to the walls of the game board. Furthermore, once a line has been made, the blocks above have to all shift down a row to fill the space, which requires a good amount of recursion.

## Tips

* Make sure you spend plenty of time planning _before_ you start coding
* Make sure you understand all of the rules of the game
* Make a checklist of all the features you want to add to the game
* Keep It Stupid Simple
* Refactor your code as you go
* Make sure you have a good idea of what your MVP is and only add extra features once you have achieved it
* Do just enough styling to get started, then once you have your MVP polish up the styling before moving on
