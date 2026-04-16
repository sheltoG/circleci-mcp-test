// unit.test.js — always passes, clean baseline
const { add, subtract, divide } = require("../src/calculator");

describe("Calculator unit tests", () => {
  test("add: 2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract: 10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("divide: 9 / 3 = 3", () => {
    expect(divide(9, 3)).toBe(3);
  });

  test("divide: throws on zero divisor", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero");
  });
});
// trigger build Thu Apr 16 14:39:58 UTC 2026
