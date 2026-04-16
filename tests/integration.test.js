// integration.test.js — fails when DATABASE_URL is not set
// This simulates a real misconfiguration caught in CI but not locally
// (developer has .env, CI does not have the secret configured)

const { connectToDatabase } = require("../src/calculator");

describe("Database integration tests", () => {
  test("can connect to the database", () => {
    // This will throw if DATABASE_URL is missing.
    // Expected failure message:
    //   "DATABASE_URL environment variable is not set."
    const conn = connectToDatabase();
    expect(conn.connected).toBe(true);
  });

  test("connection URL is valid format", () => {
    const conn = connectToDatabase();
    expect(conn.url).toMatch(/^postgres:\/\//);
  });
});
