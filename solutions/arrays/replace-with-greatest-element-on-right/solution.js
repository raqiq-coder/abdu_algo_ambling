// Replace With Greatest Element On Right
// Тема: arrays

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

export function replaceWithGreatestElementOnRight(arr) {
  let maxVal = 0;
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentEl = arr[i];

    if (i === arr.length - 1) {
      result[i] = -1;
      maxVal = currentEl;
    } else {
      result[i] = maxVal;
      maxVal = Math.max(maxVal, currentEl);
    }
  }

  return result;
}
