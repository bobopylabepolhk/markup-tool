export function randInt(min = 1, max = 9999999): number {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Return a random integer between min (inclusive) and max (exclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
