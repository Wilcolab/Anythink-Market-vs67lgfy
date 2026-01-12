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
