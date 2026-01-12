/**
 * Convert text to snake_case format
 * @param {string} text - The text to convert
 * @returns {string} - The text converted to snake_case
 */
function toSnakeCase(text) {
  return text
    // Insert underscore before uppercase letters (for camelCase)
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    // Insert underscore before uppercase letters at the start (for PascalCase)
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    // Replace spaces, hyphens, and other non-alphanumeric characters with underscore
    .replace(/[\s\-./]/g, '_')
    // Remove any duplicate underscores
    .replace(/_+/g, '_')
    // Convert to lowercase
    .toLowerCase()
    // Remove leading/trailing underscores
    .replace(/^_+|_+$/g, '');
}

module.exports = toSnakeCase;
