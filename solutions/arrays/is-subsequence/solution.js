// Is Subsequence
// Тема: arrays

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */

export function isSubsequence(s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++;
  }

  return i === s.length;
}
