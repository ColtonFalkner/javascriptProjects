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

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
])

//Challenge #3

//1. Create an array "events" of the different game events that happened (no duplicates)
console.log(gameEvents.values())
const events = [...new Set(gameEvents.values())]
console.log(events)
//2.After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game vents log.
gameEvents.delete(64)
console.log(gameEvents)

//3. Compute and log the following string to the console: "An event happened, on everage, every 9 minutes" (Keep in mind that the game has 90 minutes)
const time = [...gameEvents.keys()].pop()
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes.`
)
//4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45min) of the game
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First Half' : 'Second Half'
  console.log(`${half} - Min ${min}: ${event}`)
}

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

// //Challenge #2
// //1. Loop over the game.scored array and print each player name to the console along with the goal number. "Goal 1: Lewandowski"
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} was scored by ${player}.`)
// }

// //2.Use a loop to calculate the average odd (average of all the odds) and log it to the console.
// const odds = Object.values(game.odds)
// let average = 0
// for (const odd of odds) average += odd
// average /= odds.length
// console.log(average)

// //3. Print the 3 odds to the console, but in a nice formatted way. Get the team names directly from the object. Do not hardcode them.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`)
// }

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

//Challenge #1
// //1. Create one player array for each team
// const [players1, players2] = game.players
// console.log(players1, players2)

// //2. The first players in the array is the goalkeeper and the rest are field players
// const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers)

// //3.Create an 'allPlayers' array containing all players of both teams
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers)

// //4. During the game, team 1 used 3 subs. Create a new array 'players1Final' containing all the original team1 players, plus 'Thiago', 'Countinho', and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic']
// console.log(players1Final)

// //5.Based on the game .odds object, create one variable for each odd (called 'team1', 'draw', and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game
// console.log(team1, draw, team2)

// //6. Write a function ('printGoals') that receives an arbitrary number of player names *NOT AN ARRAY* and prints each of them to the console, along with the number of goals that weer scored in total (number of player names passed in)
// const printGoals = function (...somePlayers) {
//   console.log(`${somePlayers.length} goals were scored!`)
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals('Davies', 'Muller')
// //7.The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without useing an if/else statement or the ternary operator.
// team1 < team2 && console.log('Team  1 is more likely to win.')
// team1 > team2 && console.log('Team  2 is more likely to win.')
