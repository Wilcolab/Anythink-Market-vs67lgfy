/**
 * CHAIN PROMPT: Create a toKebabCase function with sequential steps
 * 
 * STEP 1: Input Validation and Parsing
 * ---------------------------------
 * Create the foundation of the toKebabCase function by:
 * - Validating that the input is a string (throw TypeError if not)
 * - Handling null and undefined inputs with descriptive errors
 * - Implementing a word extraction mechanism that splits on:
 *   * Underscores (for snake_case)
 *   * Hyphens (for kebab-case)
 *   * Spaces (for space-separated)
 *   * Capital letters (for camelCase and PascalCase)
 * - Return an array of words in lowercase
 * - Include comments explaining the regex pattern used
 * 
 * STEP 2: Transform and Join
 * ---------------------------------
 * Build upon Step 1 by:
 * - Taking the array of words from the previous step
 * - Removing any empty strings from the word array
 * - Converting each word to lowercase
 * - Joining all words with hyphens (kebab-case format)
 * - Trimming any leading or trailing hyphens
 * - Return the final kebab-case string
 * - Add comments explaining the transformation process
 * 
 * STEP 3: Edge Case Handling and Optimization
 * ---------------------------------
 * Finalize the function by:
 * - Handling empty strings and returning empty string
 * - Handling single-word inputs (no separators needed)
 * - Handling inputs with only separators (return empty string)
 * - Handling consecutive separators gracefully
 * - Handling numbers in the input (preserve them correctly)
 * - Adding JSDoc comments with @param, @returns, and @throws
 * - Including usage examples in comments
 * - Optimizing the regex patterns for performance
 * 
 * FINAL EXAMPLES THE FUNCTION SHOULD HANDLE:
 * - toKebabCase("helloWorld") → "hello-world"
 * - toKebabCase("HelloWorld") → "hello-world"
 * - toKebabCase("hello_world") → "hello-world"
 * - toKebabCase("hello world") → "hello-world"
 * - toKebabCase("HELLO_WORLD") → "hello-world"
 * - toKebabCase("hello__world") → "hello-world"
 * - toKebabCase("_hello_world_") → "hello-world"
 * - toKebabCase("a") → "a"
 * - toKebabCase("") → ""
 * 
 * INTEGRATION NOTES:
 * - Each step builds directly on the previous one
 * - Step 2 uses the word extraction from Step 1
 * - Step 3 integrates both previous steps with error handling
 * - The function should be cohesive and not look like separate pieces
 * - All logic should flow naturally from one step to the next
 */
