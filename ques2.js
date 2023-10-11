const game = {
  team1: "Bayern Munich",

  team2: "Borussia Dortmund",

  players: [
    [
      "Neuer",

      "Pavard",

      "Martinez",

      "Alaba",

      "Davies",

      "Kimmich",

      "Goretzka",

      "Coman",

      "Muller",

      "Gnarby",

      "Lewandowski",
    ],

    [
      "Burki",

      "Schulz",

      "Hummels",

      "Akanji",

      "Hakimi",

      "Weigl",

      "Witsel",

      "Hazard",

      "Brandt",

      "Sancho",

      "Gotze",
    ],
  ],

  score: "4:0",

  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],

  date: "Nov 9th, 2037",

  odds: {
    team1: 1.33,

    x: 3.25,

    team2: 6.5,
  },
};

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

let totalOdd = 0;

for (const odd of Object.values(game.odds)) {
  totalOdd += odd;
}

const averageOdd = totalOdd / Object.values(game.odds).length;

console.log(`Average Odd: ${averageOdd.toFixed(2)}`);

for (const [team, odd] of Object.entries(game.odds)) {
  if (team === "x") {
    console.log(`Odd of draw: ${odd}`);
  } else {
    console.log(`Odd of victory ${game[team]}: ${odd}`);
  }
}
