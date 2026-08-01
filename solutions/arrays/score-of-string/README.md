---
title: Score Of String
difficulty: easy # easy | medium | hard
tags: [arrays]
source: Neetocde # напр. leetcode-1
status: solved # todo | optimizing | solved
date: 2026-08-01
---

## Условие

Вам задана строка s. Оценка строки определяется как сумма абсолютных разностей между ASCII-значениями соседних символов.

Возвращает оценку s.

## Идея решения

Проходится по строке и брать ascii коды двух соседних символов. Брать из разность по модулю и приплюсовывать в конечный результат

## Сложность

Time O(n), Space O(1)

## Заметки
