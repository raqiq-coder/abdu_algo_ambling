import { expect, test } from "vitest";
import { topKFrequentElements } from "./solution.js";

const asSet = (arr) => [...arr].sort((a, b) => a - b);

test("k наиболее частых элементов", () => {
  expect(asSet(topKFrequentElements([1, 1, 1, 2, 2, 3], 2))).toEqual([1, 2]);
});

test("k = 1 возвращает самый частый", () => {
  expect(topKFrequentElements([1], 1)).toEqual([1]);
});

test("k равно числу уникальных элементов", () => {
  expect(asSet(topKFrequentElements([4, 4, 5, 5, 6], 3))).toEqual([4, 5, 6]);
});

test("отрицательные числа", () => {
  expect(asSet(topKFrequentElements([-1, -1, -2, -2, -2, 3], 2))).toEqual([
    -2, -1,
  ]);
});

test("k = 0 возвращает пустой массив", () => {
  expect(topKFrequentElements([1, 1, 2], 0)).toEqual([]);
});

test("пустой массив", () => {
  expect(topKFrequentElements([], 1)).toEqual([]);
});
