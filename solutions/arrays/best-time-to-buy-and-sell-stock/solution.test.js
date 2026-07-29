import { expect, test } from "vitest";
import { bestTimeToBuyAndSellStock } from "./solution.js";

test("базовый случай", () => {
  expect(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("цены только падают — сделки нет", () => {
  expect(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1])).toBe(0);
});

test("цены только растут — покупка в начале, продажа в конце", () => {
  expect(bestTimeToBuyAndSellStock([1, 2, 3, 4, 5])).toBe(4);
});

test("один элемент", () => {
  expect(bestTimeToBuyAndSellStock([5])).toBe(0);
});

test("пустой массив", () => {
  expect(bestTimeToBuyAndSellStock([])).toBe(0);
});

test("два элемента с прибылью", () => {
  expect(bestTimeToBuyAndSellStock([1, 5])).toBe(4);
});

test("два элемента без прибыли", () => {
  expect(bestTimeToBuyAndSellStock([5, 1])).toBe(0);
});

test("все цены одинаковые", () => {
  expect(bestTimeToBuyAndSellStock([3, 3, 3, 3])).toBe(0);
});

test("минимум после лучшей сделки не должен её портить", () => {
  expect(bestTimeToBuyAndSellStock([3, 10, 1, 2])).toBe(7);
});

test("глобальный минимум в конце — продавать после него нечего", () => {
  expect(bestTimeToBuyAndSellStock([8, 9, 2])).toBe(1);
});

test("лучшая сделка во второй половине", () => {
  expect(bestTimeToBuyAndSellStock([9, 8, 1, 2, 0, 7])).toBe(7);
});

test("две волны роста, побеждает вторая", () => {
  expect(bestTimeToBuyAndSellStock([2, 4, 1, 9])).toBe(8);
});

test("две волны роста, побеждает первая", () => {
  expect(bestTimeToBuyAndSellStock([1, 9, 5, 6])).toBe(8);
});

test("нули в массиве", () => {
  expect(bestTimeToBuyAndSellStock([0, 0, 5, 0])).toBe(5);
});

test("большие числа", () => {
  expect(bestTimeToBuyAndSellStock([1000000, 1, 1000000])).toBe(999999);
});

test("длинный массив: падение, затем рост", () => {
  const prices = [
    ...Array.from({ length: 5000 }, (_, i) => 10000 - i),
    ...Array.from({ length: 5000 }, (_, i) => 5001 + i),
  ];
  expect(bestTimeToBuyAndSellStock(prices)).toBe(4999);
});
