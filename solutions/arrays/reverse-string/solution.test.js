import { expect, test } from "vitest";
import { reverseString } from "./solution.js";

test("базовый случай", () => {
  const s = ["h", "e", "l", "l", "o"];
  reverseString(s);
  expect(s).toEqual(["o", "l", "l", "e", "h"]);
});

test("чётная длина", () => {
  const s = ["H", "a", "n", "n", "a", "h"];
  reverseString(s);
  expect(s).toEqual(["h", "a", "n", "n", "a", "H"]);
});

test("один символ", () => {
  const s = ["a"];
  reverseString(s);
  expect(s).toEqual(["a"]);
});

test("два символа", () => {
  const s = ["a", "b"];
  reverseString(s);
  expect(s).toEqual(["b", "a"]);
});

test("пустой массив", () => {
  const s = [];
  reverseString(s);
  expect(s).toEqual([]);
});

test("палиндром остаётся тем же", () => {
  const s = ["a", "b", "c", "b", "a"];
  reverseString(s);
  expect(s).toEqual(["a", "b", "c", "b", "a"]);
});

test("все символы одинаковые", () => {
  const s = ["x", "x", "x", "x"];
  reverseString(s);
  expect(s).toEqual(["x", "x", "x", "x"]);
});

test("двойной вызов возвращает исходный порядок", () => {
  const s = ["a", "b", "c", "d", "e"];
  reverseString(s);
  reverseString(s);
  expect(s).toEqual(["a", "b", "c", "d", "e"]);
});

test("изменяет массив на месте, ничего не возвращает", () => {
  const s = ["a", "b", "c"];
  expect(reverseString(s)).toBe(undefined);
  expect(s).toEqual(["c", "b", "a"]);
});

test("не меняет длину массива", () => {
  const s = ["1", "2", "3", "4", "5", "6", "7"];
  reverseString(s);
  expect(s).toHaveLength(7);
  expect(s).toEqual(["7", "6", "5", "4", "3", "2", "1"]);
});

test("пробелы и спецсимволы", () => {
  const s = [" ", "!", "a", "?", " "];
  reverseString(s);
  expect(s).toEqual([" ", "?", "a", "!", " "]);
});

test("цифры и буквы вперемешку", () => {
  const s = ["a", "1", "b", "2", "c", "3"];
  reverseString(s);
  expect(s).toEqual(["3", "c", "2", "b", "1", "a"]);
});

test("длинный массив", () => {
  const source = Array.from({ length: 1000 }, (_, i) => String(i % 10));
  const s = [...source];
  reverseString(s);
  expect(s).toEqual([...source].reverse());
});
