import { readFile } from "node:fs/promises";

// Формат: type(topic): описание
// Типы: solve | optimize | note | refactor | infra
// infra допускается без (topic), для остальных topic обязателен.
const PATTERN =
  /^(infra(\([a-z0-9-]+\))?|(solve|optimize|note|refactor)\([a-z0-9-]+\)): .+/;

const msgFile = process.argv[2];
if (!msgFile) {
  console.error("check-commit-msg: не передан путь к файлу сообщения");
  process.exit(1);
}

const raw = await readFile(msgFile, "utf8");

const subject =
  raw.split("\n").find((line) => line.trim() && !line.startsWith("#")) ?? "";

if (!PATTERN.test(subject.trim())) {
  console.error(`
❌ Некорректное сообщение коммита:

    ${subject.trim() || "(пусто)"}

Формат:  type(topic): задача — что сделал

Типы:
  solve(topic)     — решил новую задачу
  optimize(topic)  — улучшил уже решённую
  note(topic)      — заметки / разбор в README
  refactor(topic)  — реорганизация без смены поведения
  infra            — CI, хуки, скрипты, конфиги (topic не обязателен)

Примеры:
  solve(arrays): two-sum
  optimize(dp): coin-change — свёл к O(n)
  infra: настроил vitest --changed в pre-commit
`);
  process.exit(1);
}
