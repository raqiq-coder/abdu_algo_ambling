import { expect, test } from "vitest";
import { twoSum } from "./solution.js";

test("находит пару индексов", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("пара не в начале массива", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("нет решения — пустой массив", () => {
  expect(twoSum([1, 2], 100)).toEqual([]);
});
