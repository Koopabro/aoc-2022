const fs = require("fs");
const rawInput = fs.readFileSync("./day1.txt", "utf-8");
const groupedInput = rawInput.split(/\n\n/);
const input = groupedInput.map((x) => x.split(/\n/).map((y) => parseInt(y)));

// Part 1
const part1 = (input) => {
  return input
    .map((x) => x.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a)[0];
};
const part2 = (input) => {
  return input
    .map((x) => x.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
};

console.log("Part 1: " + part1(input));
console.log("Part 2: " + part2(input));

exports.part1 = part1;
exports.part2 = part2;
