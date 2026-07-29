// Best Time To Buy And Sell Stock
// Тема: arrays

/**
 * @param {number[]} prices
 * @returns {number}
 */

export function bestTimeToBuyAndSellStock(prices) {
  let min = prices[0];
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    const current = prices[i];

    min = Math.min(min, current);

    const profit = current - min;

    if (profit > 0) {
      result.push(profit);
    }
  }

  if (!result.length) {
    return 0;
  }

  return Math.max(...result);
}
