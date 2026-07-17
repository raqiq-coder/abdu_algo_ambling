import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import matter from "gray-matter";

const ROOT = "solutions";
const OUT = "INDEX.md";

const DIFF_ORDER = { easy: 0, medium: 1, hard: 2 };
const DIFF_ICON = { easy: "🟢", medium: "🟡", hard: "🔴" };
const STATUS_ICON = { solved: "✅", optimizing: "🔧", todo: "🕓" };

async function findReadmes(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  const found = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);

    if (entry.isDirectory()) {
      found.push(...(await findReadmes(full)));
    } else if (entry.name === "README.md") {
      found.push(full);
    }
  }

  return found;
}

function esc(value) {
  return String(value).replace(/\|/g, "\\|");
}

const readmes = await findReadmes(ROOT).catch(() => []);

const tasks = [];
for (const file of readmes) {
  const raw = await readFile(file, "utf8");
  const { data } = matter(raw);

  const taskDir = file.slice(0, -"/README.md".length);
  const parts = relative(ROOT, taskDir).split(sep);
  const topic = parts[0] ?? "—";

  tasks.push({
    title: data.title ?? parts.at(-1) ?? taskDir,
    topic,
    difficulty: data.difficulty ?? "easy",
    tags: Array.isArray(data.tags) ? data.tags : [],
    status: data.status ?? "todo",
    link: taskDir.split(sep).join("/"),
  });
}

tasks.sort(
  (a, b) =>
    (DIFF_ORDER[a.difficulty] ?? 9) - (DIFF_ORDER[b.difficulty] ?? 9) ||
    a.topic.localeCompare(b.topic) ||
    a.title.localeCompare(b.title)
);

const counts = { easy: 0, medium: 0, hard: 0 };
for (const t of tasks) {
  if (t.difficulty in counts) counts[t.difficulty]++;
}

const header = `Всего: ${tasks.length} · easy: ${counts.easy} · medium: ${counts.medium} · hard: ${counts.hard}`;

const rows = tasks.map((t) => {
  const diff = `${DIFF_ICON[t.difficulty] ?? ""} ${t.difficulty}`.trim();
  const status = STATUS_ICON[t.status] ?? t.status;

  return `| [${esc(t.title)}](${t.link}) | ${esc(t.topic)} | ${diff} | ${esc(
    t.tags.join(", ")
  )} | ${status} |`;
});

const table = tasks.length
  ? [
      "| Задача | Тема | Сложность | Теги | Статус |",
      "|--------|------|-----------|------|--------|",
      ...rows,
    ].join("\n")
  : "_Пока пусто. Заведи задачу через `npm run new-task <topic> <task-name>`._";

const content = `# Индекс задач

${header}

${table}

<!-- Сгенерировано scripts/build-index.js — руками не трогать. -->
`;

await writeFile(OUT, content);
console.log(`✅ ${OUT} обновлён — задач: ${tasks.length}`);
