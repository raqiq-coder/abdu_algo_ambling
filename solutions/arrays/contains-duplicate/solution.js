// Contains Duplicate
// Тема: arrays

/**
 * @param {number[]} nums
 * @returns {boolean}
 */
export function containsDuplicate(nums) {
  const unique = new Set(nums);

  return unique.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3]));
