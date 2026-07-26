// Majority Element
// Тема: arrays

/**
 * @param {number[]} nums
 * @returns {number}
 */

export function majorityElement(nums) {
  const vault = new Map();

  for (const num of nums) {
    vault.set(num, (vault.get(num) ?? 0) + 1);
  }

  for (const [k, v] of vault.entries()) {
    if (v / nums.length >= 0.5) return k;
  }

  return 0;
}
