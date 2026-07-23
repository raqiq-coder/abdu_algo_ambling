// Two Sum
// Тема: arrays

/**
 * Возвращает индексы двух чисел, дающих в сумме target.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} пара индексов или [] если решения нет
 */

export function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (!seen.has(diff)) {
      seen.set(nums[i], i);
    } else {
      return [seen.get(diff), i];
    }
  }

  return [];
}
