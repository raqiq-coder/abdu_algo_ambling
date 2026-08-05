// Find Lucky Integer In Array
// Тема: arrays

/**
 * @param {number[]} arr
 * @returns {number}
 */

export function findLuckyIntegerInArray(arr) {
  const vault = new Map();

  for (const num of arr) {
    vault.set(num, (vault.get(num) ?? 0) + 1);
  }

  let result = -1;
  for (const [k, v] of vault.entries()) {
    if (k === v) {
      result = Math.max(result, v);
    }
  }

  return result;
}
