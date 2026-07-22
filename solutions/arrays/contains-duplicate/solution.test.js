import { expect, test } from "vitest";
import { containsDuplicate } from "./solution.js";

test("есть дубликат", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test("все элементы уникальны", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test("много дубликатов", () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test("пустой массив", () => {
  expect(containsDuplicate([])).toBe(false);
});

test("один элемент", () => {
  expect(containsDuplicate([7])).toBe(false);
});

test("отрицательные числа и ноль", () => {
  expect(containsDuplicate([-1, 0, -1])).toBe(true);
});

test("NaN считается дубликатом самого себя (семантика Set)", () => {
  expect(containsDuplicate([NaN, NaN])).toBe(true);
});
