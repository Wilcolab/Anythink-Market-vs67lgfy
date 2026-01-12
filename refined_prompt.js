/**
 * PROMPT: Write a robust JavaScript function toCamelCase that converts strings to camelCase format.
 * 
 * REQUIREMENTS:
 * - Convert snake_case, kebab-case, space-separated, and mixed case strings to camelCase
 * - Preserve the first letter in lowercase (true camelCase, not PascalCase)
 * - Handle consecutive separators gracefully (e.g., "hello__world" → "helloWorld")
 * - Trim leading and trailing separators before conversion
 * - Support multiple types of separators: spaces, underscores, hyphens, dots
 * - Include comprehensive error handling for invalid inputs
 * - Handle edge cases like empty strings, null, and undefined
 * 
 * EXAMPLES:
 * - toCamelCase("hello_world") → "helloWorld"
 * - toCamelCase("hello-world") → "helloWorld"
 * - toCamelCase("hello world") → "helloWorld"
 * - toCamelCase("hello.world") → "helloWorld"
 * - toCamelCase("HELLO_WORLD") → "helloWorld"
 * - toCamelCase("Hello World") → "helloWorld"
 * - toCamelCase("hello__world") → "helloWorld"
 * - toCamelCase("_hello_world_") → "helloWorld"
 * - toCamelCase("helloWorld") → "helloWorld" (already camelCase)
 * - toCamelCase("a") → "a"
 * - toCamelCase("") → ""
 * 
 * ERROR HANDLING:
 * - Throw a TypeError with descriptive message if input is not a string
 * - Throw an error for null or undefined inputs with clear message
 * - Handle NaN or non-string types appropriately
 * 
 * EDGE CASES TO HANDLE:
 * - Empty strings: return empty string
 * - Single character: return as is (lowercase)
 * - Only separators: return empty string
 * - Multiple consecutive separators: treat as single separator
 * - Leading/trailing separators: remove them
 * - Numbers in input: preserve them
 * - Special characters: skip or handle appropriately
 * 
 * DOCUMENTATION:
 * - Include JSDoc comments with @param, @returns, and @throws
 * - Provide usage examples in comments
 * - Add inline comments for complex logic
 */

/**
 * Converts a string to camelCase format
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} - The string converted to camelCase
 * @throws {TypeError} If input is not a string
 * @throws {Error} If input is null or undefined
 */
function toCamelCase(str) {
  // Error handling for null and undefined
  if (str === null) {
    throw new Error('Input cannot be null');
  }
  if (str === undefined) {
    throw new Error('Input cannot be undefined');
  }

  // Error handling for non-string types
  if (typeof str !== 'string') {
    throw new TypeError(
      `Expected a string, but received ${typeof str}: ${String(str)}`
    );
  }

  // Handle empty strings
  if (str.length === 0) {
    return '';
  }

  // Trim leading and trailing separators and convert to lowercase
  const trimmed = str.trim().replace(/^[\s_\-\.]+|[\s_\-\.]+$/g, '');

  // Handle case where only separators were provided
  if (trimmed.length === 0) {
    return '';
  }

  // Split by separators (space, underscore, hyphen, dot) and filter empty strings
  const words = trimmed.split(/[\s_\-\.]+/).filter((word) => word.length > 0);

  // Handle case where no valid words remain
  if (words.length === 0) {
    return '';
  }

  // Convert to camelCase: first word lowercase, rest capitalized
  return words
    .map((word, index) => {
      const lowerWord = word.toLowerCase();
      // First word stays lowercase, subsequent words get capitalized
      if (index === 0) {
        return lowerWord;
      }
      // Capitalize first letter of subsequent words
      return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    })
    .join('');
}

module.exports = toCamelCase;

// Usage Examples:
// toCamelCase("hello_world") → "helloWorld"
// toCamelCase("hello-world") → "helloWorld"
// toCamelCase("hello world") → "helloWorld"
// toCamelCase("hello.world") → "helloWorld"
// toCamelCase("HELLO_WORLD") → "helloWorld"
// toCamelCase("Hello World") → "helloWorld"
// toCamelCase("hello__world") → "helloWorld"
// toCamelCase("_hello_world_") → "helloWorld"
// toCamelCase("helloWorld") → "helloWorld"
// toCamelCase("a") → "a"
// toCamelCase("") → ""
