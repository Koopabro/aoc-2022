const fs = require("fs");
  const rawInput = fs.readFileSync("./day3.txt", "utf-8");
  
  // Part 1
  const part1 = (input) => { return true }
  const part2 = (input) => { return true }

  console.log ("Part 1: " + part1(input));
  console.log ("Part 2: " + part2(input));

  exports.part1 = part1;
  exports.part2 = part2;
  