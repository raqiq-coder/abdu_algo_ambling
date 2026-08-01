// Score Of String
// Тема: arrays

/**
 * @param {string} s
 * @returns {number}
 */
export function scoreOfString(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const currentCode = s.charCodeAt(i);
    const nextCode = s.charCodeAt(i + 1);

    const diff = Math.abs(currentCode - nextCode);

    result += diff;
  }

  return result;
}
