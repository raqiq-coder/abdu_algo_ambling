import { expect, test } from "vitest";
import { bestTimeToBuyAndSellStock2 } from "./solution.js";

test("базовый случай", () => {
  expect(bestTimeToBuyAndSellStock2([7, 1, 5, 3, 6, 4])).toBe(7);
});

test("цены только растут — сумма всех приростов", () => {
  expect(bestTimeToBuyAndSellStock2([1, 2, 3, 4, 5])).toBe(4);
});

test("цены только падают — сделок нет", () => {
  expect(bestTimeToBuyAndSellStock2([7, 6, 4, 3, 1])).toBe(0);
});

test("один элемент", () => {
  expect(bestTimeToBuyAndSellStock2([5])).toBe(0);
});

test("пустой массив", () => {
  expect(bestTimeToBuyAndSellStock2([])).toBe(0);
});

test("два элемента с прибылью", () => {
  expect(bestTimeToBuyAndSellStock2([1, 5])).toBe(4);
});

test("два элемента без прибыли", () => {
  expect(bestTimeToBuyAndSellStock2([5, 1])).toBe(0);
});

test("все цены одинаковые", () => {
  expect(bestTimeToBuyAndSellStock2([3, 3, 3, 3])).toBe(0);
});

test("пила: каждый локальный рост учитывается", () => {
  expect(bestTimeToBuyAndSellStock2([1, 5, 1, 5, 1, 5])).toBe(12);
});

test("несколько сделок выгоднее одной", () => {
  // одна сделка (1 -> 5) дала бы 4, две дают 6
  expect(bestTimeToBuyAndSellStock2([1, 4, 2, 5])).toBe(6);
});

test("плато внутри роста не мешает", () => {
  expect(bestTimeToBuyAndSellStock2([1, 2, 2, 2, 5])).toBe(4);
});

test("рост, падение, рост", () => {
  expect(bestTimeToBuyAndSellStock2([2, 8, 3, 9])).toBe(12);
});

test("нули в массиве", () => {
  expect(bestTimeToBuyAndSellStock2([0, 0, 5, 0, 3])).toBe(8);
});

test("большие числа", () => {
  expect(bestTimeToBuyAndSellStock2([1, 1000000, 1, 1000000])).toBe(1999998);
});

test("длинный массив: строгий рост", () => {
  const prices = Array.from({ length: 10000 }, (_, i) => i + 1);
  expect(bestTimeToBuyAndSellStock2(prices)).toBe(9999);
});

test("длинный массив: пила по 1", () => {
  const prices = Array.from({ length: 10000 }, (_, i) => (i % 2 === 0 ? 1 : 2));
  expect(bestTimeToBuyAndSellStock2(prices)).toBe(5000);
});
