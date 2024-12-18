/**
 * Returns the current time in Unix timestamp format (seconds since 1970-01-01).
 * @returns {number} The current Unix timestamp in seconds.
 */
export function getCurrentUnixTime() {
  return Math.floor(Date.now() / 1000);
}

/**
 * Returns the current time in Unix timestamp format with full precision (milliseconds since 1970-01-01).
 * Used for ThemeToggleComponent
 * @returns {number} The current Unix timestamp in milliseconds.
 */
export function getCurrentFullUnixTime() {
  return Math.floor(Date.now());
}

/**
 * Converts a Unix timestamp (in seconds) to a human-readable date format (DD.MM.YYYY).
 * FEATURE: use for countdown time
 * @param {number} unixTime 
 * @returns {string} The formatted date in the form of 'DD.MM.YYYY'.
 */
export function unixTimeToDate(unixTime) {
  const date = new Date(unixTime * 1000);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

/**
 * 
 * @returns {string} 
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}