'use strict'

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}
//1. Create one player array for each team
const [players1, players2] = game.players
console.log(players1, players2)

//2. The first players in the array is the goalkeeper and the rest are field players
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

//3.Create an 'allPlayers' array containing all players of both teams
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

//4. During the game, team 1 used 3 subs. Create a new array 'players1Final' containing all the original team1 players, plus 'Thiago', 'Countinho', and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic']
console.log(players1Final)

//5.Based on the game .odds object, create one variable for each odd (called 'team1', 'draw', and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game
console.log(team1, draw, team2)

//6. Write a function ('printGoals') that receives an arbitrary number of player names *NOT AN ARRAY* and prints each of them to the console, along with the number of goals that weer scored in total (number of player names passed in)
const printGoals = function (...somePlayers) {
  console.log(`${somePlayers.length} goals were scored!`)
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals('Davies', 'Muller')
//7.The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without useing an if/else statement or the ternary operator.
team1 < team2 && console.log('Team  1 is more likely to win.')
team1 > team2 && console.log('Team  2 is more likely to win.')