function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

function connectToDatabase() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL environment variable is not set. " +
      "Expected format: postgres://user:pass@host:5432/dbname"
    );
  }
  return { connected: true, url };
}

module.exports = { add, subtract, divide, connectToDatabase };
