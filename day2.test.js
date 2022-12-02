const { part1, part2 } = require("./day2.js");
const testinput = `A Y
    B X
    C Z`;

test("day 2, part 1", () => {
  expect(part1(testinput)).toBe(15);
});
test("day 2, part 2", () => {
  expect(part2(testinput)).toBe("");
});
