import { expect, test } from "vitest";
import { validAnagram } from "./solution.js";

test("классическая анаграмма", () => {
  expect(validAnagram("anagram", "nagaram")).toBe(true);
});

test("не анаграмма при одинаковой длине", () => {
  expect(validAnagram("rat", "car")).toBe(false);
});

test("разная длина строк", () => {
  expect(validAnagram("ab", "abc")).toBe(false);
});

test("одинаковые строки", () => {
  expect(validAnagram("abc", "abc")).toBe(true);
});

test("пустые строки", () => {
  expect(validAnagram("", "")).toBe(true);
});

test("те же буквы, но разное количество каждой", () => {
  expect(validAnagram("aabb", "abbb")).toBe(false);
});

test("буква из t отсутствует в s", () => {
  expect(validAnagram("aa", "ab")).toBe(false);
});

test("регистр имеет значение", () => {
  expect(validAnagram("Abc", "abc")).toBe(false);
});

test("повторяющиеся символы в перемешанном порядке", () => {
  expect(validAnagram("bbcc", "ccbb")).toBe(true);
});
