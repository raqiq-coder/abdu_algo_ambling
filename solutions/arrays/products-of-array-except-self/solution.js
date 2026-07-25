// Products Of Array Except Self
// Тема: arrays

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
export function productsOfArrayExceptSelf(nums) {
  const result = [];

  let wholeProduct = 1;
  let zeroesCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroesCount += 1;
      continue;
    }

    wholeProduct *= nums[i];
  }

  if (nums.includes(0)) {
    for (let i = 0; i < nums.length; i++) {
      result[i] = 0;

      if (!(zeroesCount >= 2) && nums[i] === 0) {
        result[i] = wholeProduct;
      }
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      result[i] = wholeProduct / nums[i];
    }
  }

  return result;
}
