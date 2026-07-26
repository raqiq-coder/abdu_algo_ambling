import { expect, test } from "vitest";
import { replaceWithGreatestElementOnRight } from "./solution.js";

test("базовый случай", () =>
  expect(replaceWithGreatestElementOnRight([2, 4, 5, 3, 1, 2])).toEqual([
    5, 5, 3, 2, 2, -1,
  ]));

test("на входе пустой массив", () =>
  expect(replaceWithGreatestElementOnRight([])).toEqual([]));

test("в входном массиве всего один элемент", () =>
  expect(replaceWithGreatestElementOnRight([4])).toEqual([-1]));

test("Нули в входном массиве", () =>
  expect(replaceWithGreatestElementOnRight([2, 0, 5, 0, 1, 2])).toEqual([
    5, 5, 2, 2, 2, -1,
  ]));

test("Отрицательные числа в входном массиве", () =>
  expect(replaceWithGreatestElementOnRight([2, -1, 5, -2, 1, 2])).toEqual([
    5, 5, 2, 2, 2, -1,
  ]));

test("Все элемены входного массива отрицательные", () =>
  expect(replaceWithGreatestElementOnRight([-2, -1, -5, -2, -1, -2])).toEqual([
    -1, -1, -1, -1, -2, -1,
  ]));

test("два элемента", () =>
  expect(replaceWithGreatestElementOnRight([1, 2])).toEqual([2, -1]));

test("строго возрастающий массив: максимум всегда справа", () =>
  expect(replaceWithGreatestElementOnRight([1, 2, 3, 4])).toEqual([
    4, 4, 4, -1,
  ]));

test("строго убывающий массив: максимум справа — сосед", () =>
  expect(replaceWithGreatestElementOnRight([4, 3, 2, 1])).toEqual([
    3, 2, 1, -1,
  ]));

test("все элементы одинаковые", () =>
  expect(replaceWithGreatestElementOnRight([7, 7, 7])).toEqual([7, 7, -1]));

test("максимум стоит первым и ни на что не влияет", () =>
  expect(replaceWithGreatestElementOnRight([9, 1, 2])).toEqual([2, 2, -1]));

test("несколько вхождений максимума", () =>
  expect(replaceWithGreatestElementOnRight([1, 5, 3, 5, 2])).toEqual([
    5, 5, 5, 2, -1,
  ]));

test("-1 среди входных данных не ломает результат", () =>
  expect(replaceWithGreatestElementOnRight([-1, -3, -1, -7])).toEqual([
    -1, -1, -7, -1,
  ]));

test("входной массив не мутируется", () => {
  const input = [2, 4, 5, 3, 1, 2];

  replaceWithGreatestElementOnRight(input);

  expect(input).toEqual([2, 4, 5, 3, 1, 2]);
});
