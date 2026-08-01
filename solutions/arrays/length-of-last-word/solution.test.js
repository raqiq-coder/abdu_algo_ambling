import { expect, test } from "vitest";
import { lengthOfLastWord } from "./solution.js";

test("базовый случай", () => {
  expect(lengthOfLastWord("Hello World")).toBe(5);
});

test("пример из условия: пробелы с обеих сторон", () => {
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
});

test("слово из одной буквы в конце", () => {
  expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
});

test("одно слово без пробелов", () => {
  expect(lengthOfLastWord("hello")).toBe(5);
});

test("один символ", () => {
  expect(lengthOfLastWord("a")).toBe(1);
});

test("один пробел в конце", () => {
  expect(lengthOfLastWord("a ")).toBe(1);
});

test("много пробелов в конце", () => {
  expect(lengthOfLastWord("day     ")).toBe(3);
});

test("много пробелов в начале не влияют", () => {
  expect(lengthOfLastWord("     day")).toBe(3);
});

test("несколько пробелов между словами", () => {
  expect(lengthOfLastWord("a    bc")).toBe(2);
});

test("последнее слово — самое длинное", () => {
  expect(lengthOfLastWord("a bb ccc")).toBe(3);
});

test("последнее слово — самое короткое", () => {
  expect(lengthOfLastWord("ccc bb a")).toBe(1);
});

test("строка только из пробелов", () => {
  expect(lengthOfLastWord("   ")).toBe(0);
});

test("пустая строка", () => {
  expect(lengthOfLastWord("")).toBe(0);
});

test("регистр не важен для длины", () => {
  expect(lengthOfLastWord("Hello WORLD")).toBe(5);
});

test("длинное последнее слово", () => {
  expect(lengthOfLastWord("short " + "x".repeat(100000))).toBe(100000);
});

test("длинный хвост из пробелов после короткого слова", () => {
  expect(lengthOfLastWord("hi" + " ".repeat(100000))).toBe(2);
});

test("много слов", () => {
  const s = Array.from({ length: 50000 }, (_, i) =>
    "w".repeat((i % 5) + 1)
  ).join(" ");
  // последнее слово: i = 49999, длина (49999 % 5) + 1 = 5
  expect(lengthOfLastWord(s)).toBe(5);
});
