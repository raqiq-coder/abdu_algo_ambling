import { expect, test } from "vitest";
import { productsOfArrayExceptSelf } from "./solution.js";

test("базовый случай", () => {
  expect(productsOfArrayExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test("отрицательные числа", () => {
  expect(productsOfArrayExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
});

test("один ноль в середине", () => {
  expect(productsOfArrayExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
});

test("один ноль в начале", () => {
  expect(productsOfArrayExceptSelf([0, 1, 2, 3])).toEqual([6, 0, 0, 0]);
});

test("один ноль в конце", () => {
  expect(productsOfArrayExceptSelf([1, 2, 3, 0])).toEqual([0, 0, 0, 6]);
});

test("два нуля дают все нули", () => {
  expect(productsOfArrayExceptSelf([0, 0, 1, 2])).toEqual([0, 0, 0, 0]);
});

test("два элемента", () => {
  expect(productsOfArrayExceptSelf([3, 5])).toEqual([5, 3]);
});

test("единицы", () => {
  expect(productsOfArrayExceptSelf([1, 1, 1])).toEqual([1, 1, 1]);
});

test("только отрицательные", () => {
  expect(productsOfArrayExceptSelf([-1, -2, -3])).toEqual([6, 3, 2]);
});
