/**
 * PROMPT: Create a function that converts strings to camelCase format
 * 
 * Requirements:
 * - Convert snake_case to camelCase
 * - Convert kebab-case to camelCase
 * - Convert space-separated words to camelCase
 * - Handle mixed formats
 * - Keep the first letter lowercase (camelCase, not PascalCase)
 * 
 * Examples:
 * - toCamelCase("hello_world") → "helloWorld"
 * - toCamelCase("hello-world") → "helloWorld"
 * - toCamelCase("Hello World") → "helloWorld"
 * - toCamelCase("hello_world_foo") → "helloWorldFoo"
 * - toCamelCase("HelloWorld") → "helloWorld"
 * - toCamelCase("helloWorld") → "helloWorld" (already camelCase)
 * 
 * The function should handle edge cases like:
 * - Empty strings
 * - Single words
 * - Leading/trailing spaces or separators
 * - Multiple consecutive separators
 */
