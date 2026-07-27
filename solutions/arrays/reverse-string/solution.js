// Reverse String
// Тема: arrays

/**
 * @param {string[]} s
 * @returns {void}
 */

export function reverseString(s) {
  let j = 1;
  for (let i = 0; i < s.length; i++) {
    if (i >= s.length - j) break;

    let left = s[i];
    let right = s[s.length - j];

    s[i] = right;
    s[s.length - j] = left;

    j++;
  }
}
