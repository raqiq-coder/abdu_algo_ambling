import { expect, test } from "vitest";
import { scoreOfString } from "./solution.js";

test("базовый случай", () => {
  // |h-e| + |e-l| + |l-l| + |l-o| = 3 + 7 + 0 + 3
  expect(scoreOfString("hello")).toBe(13);
});

test("пример из условия: zaz", () => {
  // |z-a| + |a-z| = 25 + 25
  expect(scoreOfString("zaz")).toBe(50);
});

test("два соседних символа по возрастанию", () => {
  expect(scoreOfString("ab")).toBe(1);
});

test("два соседних символа по убыванию — модуль разности", () => {
  expect(scoreOfString("ba")).toBe(1);
});

test("один символ — пар нет", () => {
  expect(scoreOfString("a")).toBe(0);
});

test("пустая строка", () => {
  expect(scoreOfString("")).toBe(0);
});

test("одинаковые символы дают ноль", () => {
  expect(scoreOfString("aaaa")).toBe(0);
});

test("регистр учитывается: 'a'(97) и 'A'(65)", () => {
  expect(scoreOfString("aA")).toBe(32);
});

test("цифры и буквы вперемешку", () => {
  // |a(97)-1(49)| + |1(49)-b(98)| = 48 + 49
  expect(scoreOfString("a1b")).toBe(97);
});

test("пробелы и знаки препинания тоже считаются", () => {
  // |a(97)-' '(32)| + |' '(32)-b(98)| = 65 + 66
  expect(scoreOfString("a b")).toBe(131);
});

test("максимальный размах по алфавиту", () => {
  expect(scoreOfString("az")).toBe(25);
});

test("монотонная строка: сумма шагов", () => {
  // abcdef: пять шагов по 1
  expect(scoreOfString("abcdef")).toBe(5);
});

test("чередование даёт удвоенную сумму по сравнению с монотонной", () => {
  // abab: 1 + 1 + 1
  expect(scoreOfString("abab")).toBe(3);
});

test("длинная строка чередования", () => {
  const s = "az".repeat(50000); // 100000 символов, 99999 пар по 25
  expect(scoreOfString(s)).toBe(99999 * 25);
});

test("длинная строка из одинаковых символов", () => {
  expect(scoreOfString("x".repeat(100000))).toBe(0);
});
