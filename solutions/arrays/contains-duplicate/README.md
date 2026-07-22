---
title: Contains Duplicate
difficulty: easy
tags: [arrays]
source: Neetcode
status: solved
date: 2026-07-22
---

## Условие

Дается целочисленный массив `nums`, верните `true`, если какое-либо значение появляется в массиве более одного раза, в противном случае верните `false`. Числа могут быть отрицательными

## Идея решения

Сравнивается длинна массива преобразованного через `Set()` и исходного.

## Сложность

Time O(1), Space O(n)

## Заметки

Первоначальное решение, которое мне пришло на ум было использовать хэш-мапу для хранения в качестве ключа число и значение сколько раз оно встречается в массиве:

```js
const seen = new Map();
let result = false;

nums.forEach((n) => {
  if (!seen.has(n)) {
    seen.set(n, 1);
  } else {
    seen.set(n, seen.get(n) + 1);
  }
});

seen.forEach((val) => {
  if (val >= 2) {
    result = true;
  }
});

return result;
```
