const fs = require("fs");
const rawInput = fs.readFileSync("./day2.txt", "utf-8");

const inputHandler = (input) => {
  input.split(/\n/).map((i) => i.split(" "));
};
console.log(inputHandler(rawInput));
const part1 = (input) => {
  return true;
};
const part2 = (input) => {
  return true;
};

console.log("Part 1: " + part1(input));
console.log("Part 2: " + part2(input));

exports.part1 = part1;
exports.part2 = part2;
