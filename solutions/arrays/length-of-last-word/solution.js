// Length Of Last Word
// Тема: arrays

/**
 * @param {string} s
 * @returns {number}
 */

export function lengthOfLastWord(s) {
  let result = 0;

  const trimmed = s.trimEnd();

  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed.charCodeAt(i) === 32) {
      break;
    }

    result++;
  }

  return result;
}
