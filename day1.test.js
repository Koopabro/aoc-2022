const { part1, part2 } = require("./day1.js");
const testinput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`
  .split(/\n\n/)
  .map((x) => x.split(/\n/).map((y) => parseInt(y)));

test("day 1, part 1", () => {
  expect(part1(testinput)).toBe(24000);
});
test("day 1, part 2", () => {
  expect(part2(testinput)).toBe(45000);
});
