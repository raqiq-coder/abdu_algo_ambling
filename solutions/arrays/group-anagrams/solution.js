// Group Anagrams
// Тема: arrays

/**
 * @param {string[]} strs
 * @returns {string[][]}
 */

export function groupAnagrams(strs) {
  const vault = new Map();
  const result = [];

  for (const str of strs) {
    const sorted = str.split("").toSorted().join("");

    if (!vault.has(sorted)) {
      vault.set(sorted, [str]);
    } else {
      vault.get(sorted).push(str);
    }
  }

  for (const val of vault.values()) {
    result.push(val);
  }

  return result;
}
