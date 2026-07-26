// Longest Consecutive Sequence
// Тема: arrays

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

export function longestConsecutiveSequence(nums) {
  if (nums.length === 0) return 0;

  let best = 0;

  const vault = new Set(nums);

  for (let num of vault) {
    if (vault.has(num - 1)) continue;

    let length = 1;
    while (vault.has(num + length)) length += 1;

    best = Math.max(best, length);
  }

  return best;
}
