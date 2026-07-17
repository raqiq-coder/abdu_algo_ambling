// Two Sum
// Тема: arrays

/**
 * Возвращает индексы двух чисел, дающих в сумме target.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} пара индексов или [] если решения нет
 */

export function twoSum(nums, target) {
  const seen = new Map(); // значение -> индекс
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) {
      return [seen.get(need), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}
