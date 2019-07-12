![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Battleships

> **Difficulty level: 3**

![battleships](https://media.git.generalassemb.ly/user/15120/files/da59cd00-fec9-11e8-96b7-dd04a818ea95)

Battleships is a two-player game where each player covertly lays out their armada of ships on a game board. Each player then takes turns in attempting to hit their opponents ships by torpedoing specific squares hoping to hit an opponent's ship.

The winner is the player that sinks all the opponent's ships.

## Resources

* [How to Play: Battleship - Youtube](https://www.youtube.com/watch?v=q0qpQ8doUp8)
* [Battleship (game) - Wikipedia](https://en.wikipedia.org/wiki/Battleship_(game))

## Requirements

* The game should be one player, with the computer placing its pieces randomly at the start of the game
* The computer should be able to make random attacks on the player's board

## Suggested enhancements

* Responsive design
* More intelligent attacks by the computer

## Challenges

The biggest challenge here is the computer's moves. Firstly the ships need to be randomly placed, but without touching or overlapping, which requires a considerable amount of logic and recursion. Secondly when the computer attacks the player's board, if it hits a ship, it should try to hit adjacent squares in all directions until it has established that the ship has been sunk.

## Tips

* Make sure you spend plenty of time planning _before_ you start coding
* Make sure you understand all of the rules of the game
* Make a checklist of all the features you want to add to the game
* Keep It Stupid Simple
* Refactor your code as you go
* Make sure you have a good idea of what your MVP is and only add extra features once you have achieved it
* Do just enough styling to get started, then once you have your MVP polish up the styling before moving on
