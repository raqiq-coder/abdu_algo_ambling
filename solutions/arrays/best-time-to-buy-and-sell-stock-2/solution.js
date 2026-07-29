// Best Time To Buy And Sell Stock 2
// Тема: arrays

/**
 * @param {number[]} prices
 * @returns {number}
 */

export function bestTimeToBuyAndSellStock2(prices) {
  let result = 0;

  for (let i = prices.length - 1; i > 0; i--) {
    const current = prices[i];
    const next = prices[i - 1];

    const profit = current - next;
    if (profit > 0) {
      result += profit;
    }
  }

  return result;
}
