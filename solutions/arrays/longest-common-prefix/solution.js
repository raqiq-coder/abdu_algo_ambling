// Longest Common Prefix
// Тема: arrays

/**
 * @param {string[]} strs
 * @returns {string}
 */

export function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let firstWord = strs[0];

  let i = 0;
  while (true) {
    if (!strs[i].startsWith(firstWord)) {
      firstWord = firstWord.slice(0, firstWord.length - 1);
    } else {
      i++;
    }

    if (i === strs.length || firstWord === "") {
      return firstWord;
    }
  }
}
