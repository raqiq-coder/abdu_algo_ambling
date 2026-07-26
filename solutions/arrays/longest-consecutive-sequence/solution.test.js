import { expect, test } from "vitest";
import { longestConsecutiveSequence } from "./solution.js";

test("базовый случай", () => {
  expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
});

test("пустой массив", () => {
  expect(longestConsecutiveSequence([])).toBe(0);
});

test("один элемент", () => {
  expect(longestConsecutiveSequence([7])).toBe(1);
});

test("дубликаты не удлиняют последовательность", () => {
  expect(longestConsecutiveSequence([1, 2, 0, 1])).toBe(3);
});

test("все элементы одинаковые", () => {
  expect(longestConsecutiveSequence([5, 5, 5, 5])).toBe(1);
});

test("нет соседних чисел", () => {
  expect(longestConsecutiveSequence([10, 30, 20, 50])).toBe(1);
});

test("уже отсортированный массив", () => {
  expect(longestConsecutiveSequence([1, 2, 3, 4, 5])).toBe(5);
});

test("массив в обратном порядке", () => {
  expect(longestConsecutiveSequence([5, 4, 3, 2, 1])).toBe(5);
});

test("отрицательные числа", () => {
  expect(longestConsecutiveSequence([-3, -2, -1, 0, 5])).toBe(4);
});

test("последовательность через ноль", () => {
  expect(longestConsecutiveSequence([-1, 1, 0, -2, 4])).toBe(4);
});

test("две последовательности, берётся длинная", () => {
  expect(longestConsecutiveSequence([1, 2, 3, 10, 11, 12, 13])).toBe(4);
});

test("длинная последовательность идёт первой", () => {
  expect(longestConsecutiveSequence([9, 1, 4, 7, 3, 2, 6, 8, 5])).toBe(9);
});

test("большие числа", () => {
  expect(longestConsecutiveSequence([1000000, 999999, 999998])).toBe(3);
});

test("длинная перемешанная последовательность", () => {
  const nums = Array.from({ length: 1000 }, (_, i) => i).sort(
    () => Math.random() - 0.5
  );
  expect(longestConsecutiveSequence(nums)).toBe(1000);
});
