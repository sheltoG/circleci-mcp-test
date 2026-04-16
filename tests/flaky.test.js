// flaky.test.js — simulates a timing-dependent / race-condition failure
// Fails ~30% of runs based on Math.random(), mimicking a real flaky test

const { add } = require("../src/calculator");

describe("Flaky tests (timing sensitive)", () => {
  test("basic arithmetic still works", () => {
    expect(add(1, 1)).toBe(2);
  });

  test("async operation completes within SLA", async () => {
    // Simulates an external service call with variable latency.
    // Randomly exceeds the 100ms SLA ~30% of the time.
    const latency = Math.random() < 0.3 ? 150 : 50;

    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("ok"), latency);
    });

    // SLA check: must respond within 100ms
    expect(latency).toBeLessThan(100);
    expect(result).toBe("ok");
  });

  test("shared mutable state doesn't leak between tests", () => {
    // In a real flaky scenario, some global/module-level state might bleed
    // across test runs depending on execution order. This is a placeholder.
    const state = { count: 0 };
    state.count += 1;
    expect(state.count).toBe(1);
  });
});
