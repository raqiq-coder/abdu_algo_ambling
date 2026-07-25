import { expect, test } from "vitest";
import { longestCommonPrefix } from "./solution.js";

test("классический пример", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test("общего префикса нет", () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

test("пустой массив", () => {
  expect(longestCommonPrefix([])).toBe("");
});

test("одна строка — она сама и есть префикс", () => {
  expect(longestCommonPrefix(["single"])).toBe("single");
});

test("одна пустая строка", () => {
  expect(longestCommonPrefix([""])).toBe("");
});

test("пустая строка среди прочих обнуляет префикс", () => {
  expect(longestCommonPrefix(["", "abc"])).toBe("");
});

test("все строки одинаковые", () => {
  expect(longestCommonPrefix(["abc", "abc", "abc"])).toBe("abc");
});

test("одна строка является префиксом остальных", () => {
  expect(longestCommonPrefix(["ab", "abab", "abc"])).toBe("ab");
});

test("совпадает только начало слов", () => {
  expect(longestCommonPrefix(["dance", "dag", "danger", "damage"])).toBe("da");
});

test("регистр имеет значение", () => {
  expect(longestCommonPrefix(["ABc", "abc"])).toBe("");
});

test("лексикографически наименьшая строка не самая короткая", () => {
  expect(longestCommonPrefix(["prefixLong", "prefixA", "prefix"])).toBe(
    "prefix"
  );
});

test("префикс из одного символа при разной длине строк", () => {
  expect(longestCommonPrefix(["a", "aa", "aaa"])).toBe("a");
});

test("исходный массив не мутируется", () => {
  const input = ["flower", "flow", "flight"];
  longestCommonPrefix(input);
  expect(input).toEqual(["flower", "flow", "flight"]);
});
