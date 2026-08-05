import { expect, test } from "vitest";
import { findLuckyIntegerInArray } from "./solution.js";

test("базовый случай", () => {
  expect(findLuckyIntegerInArray([2, 2, 3, 4])).toBe(2);
});

test("несколько счастливых чисел — берём наибольшее", () => {
  expect(findLuckyIntegerInArray([1, 2, 2, 3, 3, 3])).toBe(3);
});

test("счастливого числа нет", () => {
  expect(findLuckyIntegerInArray([2, 2, 2, 3, 3])).toBe(-1);
});

test("пустой массив", () => {
  expect(findLuckyIntegerInArray([])).toBe(-1);
});

test("единственный элемент — счастливый", () => {
  expect(findLuckyIntegerInArray([1])).toBe(1);
});

test("единственный элемент — не счастливый", () => {
  expect(findLuckyIntegerInArray([5])).toBe(-1);
});

test("все элементы одинаковые и частота совпадает", () => {
  expect(findLuckyIntegerInArray([4, 4, 4, 4])).toBe(4);
});

test("все элементы одинаковые, частота не совпадает", () => {
  expect(findLuckyIntegerInArray([4, 4, 4])).toBe(-1);
});

test("все элементы уникальны — счастливая только единица", () => {
  expect(findLuckyIntegerInArray([1, 2, 3, 4, 5])).toBe(1);
});

test("все элементы уникальны и единицы нет", () => {
  expect(findLuckyIntegerInArray([2, 3, 4, 5])).toBe(-1);
});

test("большое счастливое число вместе с маленьким", () => {
  const arr = [1, ...Array(7).fill(7)];
  expect(findLuckyIntegerInArray(arr)).toBe(7);
});

test("порядок элементов не важен", () => {
  expect(findLuckyIntegerInArray([3, 1, 2, 3, 2, 3])).toBe(3);
});

test("частота больше значения не считается счастливой", () => {
  expect(findLuckyIntegerInArray([2, 2, 2])).toBe(-1);
});

test("большой вход: счастливое число одно", () => {
  const n = 100000;
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  expect(findLuckyIntegerInArray(arr)).toBe(1);
});

test("большой вход: счастливое число в конце", () => {
  const arr = [];
  for (let value = 1; value <= 500; value += 1) {
    for (let i = 0; i < value; i += 1) {
      arr.push(value);
    }
  }
  expect(findLuckyIntegerInArray(arr)).toBe(500);
});
