/**
 * Adds two numbers and returns their sum
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The sum of a and b
 * @throws {Error} If inputs are not valid numbers
 */
function addNumbers(a, b) {
  // Handle undefined or null values
  if (a === undefined || a === null) {
    throw new Error('First argument cannot be undefined or null');
  }
  if (b === undefined || b === null) {
    throw new Error('Second argument cannot be undefined or null');
  }

  // Check if inputs are numbers (not strings, booleans, or other types)
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error(
      `Invalid input types: expected numbers, got ${typeof a} and ${typeof b}`
    );
  }

  // Check for NaN values
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Input values must be valid numbers (not NaN)');
  }

  // Return the sum
  return a + b;
}

module.exports = addNumbers;

// Examples:
// addNumbers(5, 3) → 8
// addNumbers(10, -5) → 5
// addNumbers(2.5, 3.7) → 6.2
// addNumbers('5', 3) → throws Error: Invalid input types: expected numbers, got string and number
// addNumbers(5, null) → throws Error: Second argument cannot be undefined or null
// addNumbers(undefined, 3) → throws Error: First argument cannot be undefined or null
