// Word Pattern
// Тема: arrays

/**
 * @param {string} pattern
 * @param {string} s
 * @returns {boolean}
 */

export function wordPattern(pattern, s) {
  const words = s.split(" ");
  const patternArr = pattern.split("");

  if (words.length !== patternArr.length) return false;

  const uniqeWords = new Set(words);
  const uniqePatterns = new Set(patternArr);

  return uniqeWords.size === uniqePatterns.size;
}
