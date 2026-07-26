import { expect, test } from "vitest";
import { majorityElement } from "./solution.js";

test("базовый случай", () => {
  expect(majorityElement([3, 2, 3])).toBe(3);
});

test("мажоритарный элемент в середине", () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
});

test("один элемент", () => {
  expect(majorityElement([1])).toBe(1);
});

test("все элементы одинаковые", () => {
  expect(majorityElement([4, 4, 4, 4])).toBe(4);
});

test("два элемента", () => {
  expect(majorityElement([7, 7])).toBe(7);
});

test("мажоритарный элемент в начале", () => {
  expect(majorityElement([5, 5, 5, 1, 2])).toBe(5);
});

test("мажоритарный элемент в конце", () => {
  expect(majorityElement([1, 2, 9, 9, 9])).toBe(9);
});

test("ровно половина + 1", () => {
  expect(majorityElement([1, 2, 3, 4, 4, 4, 4])).toBe(4);
});

test("отрицательные числа", () => {
  expect(majorityElement([-1, -1, -1, 2, 3])).toBe(-1);
});

test("ноль как мажоритарный элемент", () => {
  expect(majorityElement([0, 0, 0, 1, 2])).toBe(0);
});

test("чередование с мажоритарным элементом", () => {
  expect(majorityElement([6, 1, 6, 2, 6, 3, 6])).toBe(6);
});

test("большие числа", () => {
  expect(majorityElement([1000000, 1000000, 999999])).toBe(1000000);
});

test("пустой массив", () => {
  expect(majorityElement([])).toBe(0);
});

test("длинный массив", () => {
  const nums = [
    ...Array.from({ length: 501 }, () => 8),
    ...Array.from({ length: 499 }, (_, i) => i),
  ].sort(() => Math.random() - 0.5);
  expect(majorityElement(nums)).toBe(8);
});
