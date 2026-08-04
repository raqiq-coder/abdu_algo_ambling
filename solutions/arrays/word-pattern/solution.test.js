import { expect, test } from "vitest";
import { wordPattern } from "./solution.js";

test("базовый случай", () => {
  expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
});

test("одна буква — одно слово", () => {
  expect(wordPattern("a", "dog")).toBe(true);
});

test("разная длина: букв больше, чем слов", () => {
  expect(wordPattern("ab", "dog")).toBe(false);
});

test("разная длина: слов больше, чем букв", () => {
  expect(wordPattern("a", "dog cat")).toBe(false);
});

test("нарушен порядок: две буквы на одно слово", () => {
  expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
});

test("две разные буквы указывают на одно слово", () => {
  expect(wordPattern("aa", "dog cat")).toBe(false);
});

test("две одинаковые буквы — два разных слова", () => {
  expect(wordPattern("ab", "dog dog")).toBe(false);
});

test("все буквы разные, все слова разные", () => {
  expect(wordPattern("abc", "dog cat fish")).toBe(true);
});

test("все буквы одинаковые, все слова одинаковые", () => {
  expect(wordPattern("aaa", "dog dog dog")).toBe(true);
});

test("буквы совпадают со словами буквально", () => {
  expect(wordPattern("ab", "a b")).toBe(true);
});

test("слова совпадают с буквами, но перекрёстно", () => {
  expect(wordPattern("ab", "b a")).toBe(true);
});

test("длинный корректный шаблон", () => {
  expect(wordPattern("abcabc", "one two three one two three")).toBe(true);
});

test("длинный шаблон с одним сбоем в конце", () => {
  expect(wordPattern("abcabc", "one two three one two four")).toBe(false);
});

test("регистр слов имеет значение", () => {
  expect(wordPattern("aa", "Dog dog")).toBe(false);
});

test("большой вход: полное соответствие", () => {
  const n = 20000;
  const letters = "abcde";
  const pattern = Array.from({ length: n }, (_, i) => letters[i % 5]).join("");
  const s = Array.from({ length: n }, (_, i) => `w${i % 5}`).join(" ");
  expect(wordPattern(pattern, s)).toBe(true);
});
