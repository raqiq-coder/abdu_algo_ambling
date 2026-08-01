import { expect, test } from "vitest";
import { isSubsequence } from "./solution.js";

test("базовый случай", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});

test("порядок нарушен — не подпоследовательность", () => {
  expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});

test("пустой s — всегда подпоследовательность", () => {
  expect(isSubsequence("", "ahbgdc")).toBe(true);
});

test("пустой t — только пустой s подходит", () => {
  expect(isSubsequence("", "")).toBe(true);
  expect(isSubsequence("a", "")).toBe(false);
});

test("s длиннее t", () => {
  expect(isSubsequence("abcd", "abc")).toBe(false);
});

test("s равен t", () => {
  expect(isSubsequence("abc", "abc")).toBe(true);
});

test("один символ найден", () => {
  expect(isSubsequence("b", "abc")).toBe(true);
});

test("один символ не найден", () => {
  expect(isSubsequence("z", "abc")).toBe(false);
});

test("все символы в начале t", () => {
  expect(isSubsequence("abc", "abcxyz")).toBe(true);
});

test("все символы в конце t", () => {
  expect(isSubsequence("xyz", "abcxyz")).toBe(true);
});

test("повторяющиеся символы в s покрыты повторами в t", () => {
  expect(isSubsequence("aaa", "aaabbb")).toBe(true);
});

test("повторов в t не хватает", () => {
  expect(isSubsequence("aaa", "aab")).toBe(false);
});

test("жадный проход не должен ломаться на разбросанных повторах", () => {
  expect(isSubsequence("aba", "abracadabra")).toBe(true);
});

test("нужный символ есть, но раньше по позиции", () => {
  expect(isSubsequence("ba", "ab")).toBe(false);
});

test("регистр учитывается", () => {
  expect(isSubsequence("A", "a")).toBe(false);
});

test("длинная строка: подпоследовательность есть", () => {
  const t = "ab".repeat(50000);
  const s = "a".repeat(50000);
  expect(isSubsequence(s, t)).toBe(true);
});

test("длинная строка: подпоследовательности нет", () => {
  const t = "a".repeat(100000);
  const s = "a".repeat(99999) + "b";
  expect(isSubsequence(s, t)).toBe(false);
});
