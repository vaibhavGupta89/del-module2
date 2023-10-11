const gameEvents = new Map([
  [17, "GOAL"],

  [36, "Substitution"],

  [47, "GOAL"],

  [61, "Substitution"],

  [64, "Yellow card"],

  [69, "Red card"],

  [70, "Substitution"],

  [72, "Substitution"],

  [76, "GOAL"],

  [80, "GOAL"],

  [92, "Yellow card"],
]);

console.log(gameEvents.keys());

const events = new Set(gameEvents.values());

console.log(events);

gameEvents.delete(64);

const totalMinutes = 90;

const eventCount = gameEvents.size;

const averageFrequency = totalMinutes / eventCount;

console.log(`An event happened, on average, every ${averageFrequency} minutes`);

gameEvents.forEach((event, minute) => {
  const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";

  console.log(`[${half}] ${minute}: ${event}`);
});
