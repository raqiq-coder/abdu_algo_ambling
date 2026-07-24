// Top K Frequent Elements
// Тема: arrays

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */

export function topKFrequentElements(nums, k) {
  const vault = new Map();

  for (const num of nums) {
    if (!vault.has(num)) {
      vault.set(num, 1);
    } else {
      vault.set(num, vault.get(num) + 1);
    }
  }

  return [...vault.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key)
    .slice(0, k);
}
