import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const [topic, taskName] = process.argv.slice(2);

if (!topic || !taskName) {
  console.error("Использование: npm run new-task <topic> <task-name>");
  console.error("Пример:        npm run new-task arrays two-sum");
  process.exit(1);
}

const slug = /^[a-z0-9-]+$/;
for (const [label, value] of [
  ["topic", topic],
  ["task-name", taskName],
]) {
  if (!slug.test(value)) {
    console.error(
      `Ошибка: "${label}" должен быть в kebab-case (a-z, 0-9, дефис). Получено: "${value}"`
    );

    process.exit(1);
  }
}

const dir = join("solutions", topic, taskName);

try {
  await access(dir);
  console.error(`Ошибка: папка уже существует — ${dir}`);

  process.exit(1);
} catch {}

const title = taskName
  .split("-")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");

const solution = `// ${title}
// Тема: ${topic}

/**
 * @param {*} input
 * @returns {*}
 */
export function ${camel(taskName)}(input) {
  // TODO: решение
}
`;

const test = `import { expect, test } from "vitest";
import { ${camel(taskName)} } from "./solution.js";

test("базовый случай", () => {
  // TODO: заполнить
  expect(${camel(taskName)}(null)).toBe(undefined);
});
`;

const today = new Date().toISOString().slice(0, 10);

const readme = `---
title: ${title}
difficulty: easy # easy | medium | hard
tags: [${topic}]
source: # напр. leetcode-1
status: todo # todo | optimizing | solved
date: ${today}
---

## Условие

## Идея решения

## Сложность

Time O(?), Space O(?)

## Заметки
`;

await mkdir(dir, { recursive: true });
await Promise.all([
  writeFile(join(dir, "solution.js"), solution),
  writeFile(join(dir, "solution.test.js"), test),
  writeFile(join(dir, "README.md"), readme),
]);

console.log(`✅ Создано: ${dir}`);
console.log(`   ├─ solution.js`);
console.log(`   ├─ solution.test.js`);
console.log(`   └─ README.md`);
console.log(
  `\nДальше: заполни README, реши задачу, прогони  npx vitest ${dir}`
);

function camel(s) {
  return s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}
