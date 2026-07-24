import { expect, test } from "vitest";
import { groupAnagrams } from "./solution.js";

// Порядок групп и порядок строк внутри группы не гарантированы условием,
// поэтому нормализуем: сортируем строки внутри группы и сами группы.
function normalize(groups) {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => {
      const aKey = a.join(",");
      const bKey = b.join(",");
      return aKey < bKey ? -1 : aKey > bKey ? 1 : 0;
    });
}

function expectGroups(actual, expected) {
  expect(normalize(actual)).toEqual(normalize(expected));
}

test("классический пример", () => {
  expectGroups(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
});

test("пустой массив", () => {
  expect(groupAnagrams([])).toEqual([]);
});

test("одна пустая строка", () => {
  expectGroups(groupAnagrams([""]), [[""]]);
});

test("одна строка", () => {
  expectGroups(groupAnagrams(["abc"]), [["abc"]]);
});

test("нет анаграмм — каждая строка в своей группе", () => {
  expectGroups(groupAnagrams(["abc", "def", "ghi"]), [
    ["abc"],
    ["def"],
    ["ghi"],
  ]);
});

test("все строки — анаграммы друг друга", () => {
  expectGroups(groupAnagrams(["abc", "bca", "cab", "acb"]), [
    ["abc", "bca", "cab", "acb"],
  ]);
});

test("дубликаты строк остаются в одной группе", () => {
  expectGroups(groupAnagrams(["aa", "aa", "bb"]), [["aa", "aa"], ["bb"]]);
});

test("регистр имеет значение", () => {
  expectGroups(groupAnagrams(["Abc", "abc"]), [["Abc"], ["abc"]]);
});

test("несколько пустых строк группируются вместе", () => {
  expectGroups(groupAnagrams(["", "", "a"]), [["", ""], ["a"]]);
});

test("строки разной длины не группируются", () => {
  expectGroups(groupAnagrams(["a", "aa", "aaa"]), [["a"], ["aa"], ["aaa"]]);
});
