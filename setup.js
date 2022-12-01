const fs = require("fs");

// create files and folders

for (let i = 1; i <= 25; i++) {
  fs.writeFileSync(`./day${i}.txt`, "");
  fs.writeFileSync(
    `./day${i}.js`,
    `const fs = require("fs");
  const rawInput = fs.readFileSync("./day${i}.txt", "utf-8");
  
  // Part 1
  const part1 = (input) => { return true }
  const part2 = (input) => { return true }

  console.log ("Part 1: " + part1(input));
  console.log ("Part 2: " + part2(input));

  exports.part1 = part1;
  exports.part2 = part2;
  `
  );
  fs.writeFileSync(
    `./day${i}.test.js`,
    `const { part1, part2 } = require("./day${i}.js");
    const testinput = "";

    test("day ${i}, part 1", () => {expect(part1(testinput)).toBe("")});
    test("day ${i}, part 2", () => {expect(part2(testinput)).toBe("")});`
  );
}
